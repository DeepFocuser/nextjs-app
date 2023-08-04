'use client';
import {
    memo,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { ModelInfo } from '@/types';
import * as tf from '@tensorflow/tfjs';
import { Rank, Tensor } from '@tensorflow/tfjs';
import Loading from '@/components/structure/loading';

function Facedetection({ backendName, modelPath }: ModelInfo) {
    const [playing, setPlaying] = useState<boolean>(false);
    // false : front camera / true : rear camera whene mobile
    const [cameraSelect, setCameraSelect] = useState<boolean>(false);
    const cameraFrontRef = useRef<any>(null);
    const cameraRearRef = useRef<any>(null);
    //const setWebCamStateAtom = useSetRecoilState(webCamStateAtom);
    const videoRef = useRef<any>(null);
    const canvasRef = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const inferenceRef = useRef<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // 비동기 처리1 - backend, Model Loading 하기
    const setENV: (name: string) => void = async (name) => {
        await tf.setBackend(name);
        console.log(`Backend is ${tf.getBackend()}`);
    };

    // 비동기 처리2 - canvas에 그리기  하기
    const drawResult = useCallback<
        (
            image: tf.Tensor,
            score: tf.Tensor,
            bbox: tf.Tensor,
            canvasHeight: number,
            canvasWidth: number,
        ) => void
    >(async (image, score, bbox, canvasHeight, canvasWidth) => {
        const imageAlpha: tf.Tensor<Rank> = tf.tidy(() => {
            const [height, width, _] = image.shape;
            const opacity = tf.ones([height, width, 1]).mul(255);
            return tf.concat([image, opacity], 2);
        });

        const resizeImage = imageAlpha.resizeBilinear([
            canvasHeight,
            canvasWidth,
        ]);

        const [height, width] = resizeImage.shape.slice(0, 2);
        const pixelData = new Uint8ClampedArray(await resizeImage.data());

        const resizeBbox: Tensor<Rank> = tf.tidy(() => {
            return bbox.squeeze();
        });

        const finalBox: any = await resizeBbox.array();
        finalBox.forEach((value: number, index: number) => {
            const wRatio = canvasWidth / 448;
            const hRatio = canvasHeight / 448;
            if (index % 2 === 0) finalBox[index] *= wRatio;
            else finalBox[index] *= hRatio;
        });

        const imageData = new ImageData(pixelData, width, height);
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.putImageData(imageData, 0, 0);
            ctx.fillRect(
                finalBox[0],
                finalBox[1],
                finalBox[2] - finalBox[0],
                finalBox[3] - finalBox[1],
            );
            ctx.fillStyle = 'rgba(183, 240, 177, 0.4)';
        }
        tf.dispose([image, imageAlpha, resizeImage, score, bbox, resizeBbox]);
    }, []);

    // 비동기 처리3 - model inference
    const inference = useCallback<(path: string, select: boolean) => void>(
        async (path, select) => {
            canvasRef.current.style.display = 'block';

            // 카메라 1개만 선택하기
            let deviceId = '';
            let cameraCount = 0; // deviceId가 안나오는 경우도 있다.
            for (const camera of await navigator.mediaDevices.enumerateDevices()) {
                if (camera.kind.startsWith('video')) {
                    deviceId = camera.deviceId;
                    cameraCount += 1;
                    break;
                }
            }

            // 내 모델은 448x448x3 을 입력으로 받음
            if (inferenceRef.current && cameraCount > 0) {
                let webcam;
                if (deviceId !== '')
                    webcam = await tf.data.webcam(videoRef.current, {
                        deviceId,
                        resizeWidth: 448,
                        resizeHeight: 448,
                        facingMode: !select ? 'user' : 'environment',
                    });
                else
                    webcam = await tf.data.webcam(videoRef.current, {
                        resizeWidth: 448,
                        resizeHeight: 448,
                        facingMode: !select ? 'user' : 'environment',
                    });

                // model loading
                const model = await tf.loadGraphModel(path);

                // Inference loop
                while (inferenceRef.current) {
                    const canvasHeight = canvasRef.current?.height;
                    const canvasWidth = canvasRef.current?.width;
                    await tf.nextFrame();
                    // 중간에 inferRef.current가 바뀐다.
                    if (inferenceRef.current) {
                        let img: any;
                        try {
                            img = await webcam.capture();
                        } catch (error) {
                            if (img) img.dispose();
                            continue;
                        }
                        const input = tf.tidy(() => img.expandDims(0).div(255)); // normalize input
                        const [ids, scores, bboxes] = (await model.executeAsync(
                            { input }, // provide inputs
                            ['Identity_1:0', 'Identity_2:0', 'bboxes'], // select outputs
                        )) as tf.Tensor<Rank>[];

                        await drawResult(
                            img.clone(),
                            scores.clone(),
                            bboxes.clone(),
                            canvasHeight,
                            canvasWidth,
                        );
                        tf.dispose([img, input, ids, scores, bboxes]);
                    }
                }
                if (canvasRef.current !== null) {
                    canvasRef.current.style.display = 'none';
                }
                webcam.stop();
                model.dispose();
            }
        },
        [],
    );

    // tensorflow.js backend / windowResizeListener 초기화
    useEffect(() => {
        setENV(backendName);

        const windowResizeListener = () => {
            canvasRef.current.width = Math.floor(window.innerWidth * 0.6);
            canvasRef.current.height = Math.floor(window.innerHeight * 0.6);
        };

        windowResizeListener();
        window.addEventListener('resize', windowResizeListener);
        return () => {
            window.removeEventListener('resize', windowResizeListener);
        };
    }, []);

    // useLayoutEffect을 사용해야 한다.
    useLayoutEffect(() => {
        if (playing) {
            setLoading(true);
            inferenceRef.current = true;
            inference(modelPath, cameraSelect);

            inputRef.current.disabled = true;
            cameraFrontRef.current.disabled = true;
            cameraRearRef.current.disabled = true;
            setTimeout(() => {
                inputRef.current.disabled = false;
                cameraFrontRef.current.disabled = false;
                cameraRearRef.current.disabled = false;
                setLoading(false); // 다른 버튼을 비활성화하기 위함
            }, 2100);
        }

        return () => {
            if (videoRef.current.srcObject !== null) {
                setLoading(false);
                inferenceRef.current = false;
                // console.log(tf.memory());
                if ('getTracks' in videoRef.current.srcObject) {
                    videoRef.current.srcObject
                        .getTracks()
                        .forEach((track: MediaStreamTrack) => {
                            track.stop();
                        });
                }
            }
        };
    }, [playing, cameraSelect]);
    return (
        <div className="mb-36">
            <div className="mt-3 grid items-center justify-center md:justify-self-end">
                <label
                    htmlFor="AcceptConditions"
                    className="relative h-8 w-14 cursor-pointer"
                    onChange={() => setPlaying(!playing)}
                >
                    <input
                        ref={inputRef}
                        type="checkbox"
                        id="AcceptConditions"
                        className="peer sr-only"
                    />
                    <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-red-500"></span>
                    <span className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
                </label>
            </div>
            <div className="mb-4 mt-4 grid items-center justify-center md:justify-self-end">
                <label className="label cursor-pointer">
                    <span className="label-text mr-3 text-red-700">F</span>
                    <input
                        ref={cameraFrontRef}
                        onChange={useCallback(() => setCameraSelect(false), [])}
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-red-500"
                        defaultChecked
                    />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text mr-3 text-blue-700">R</span>
                    <input
                        ref={cameraRearRef}
                        onChange={useCallback(() => setCameraSelect(true), [])}
                        type="radio"
                        name="radio-10"
                        className="radio checked:bg-blue-500"
                    />
                </label>
            </div>
            {loading ? <Loading /> : null}
            <div className="flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    style={{
                        transform: 'scaleX(-1)',
                    }}
                ></canvas>
                <video
                    ref={videoRef}
                    height="1080"
                    width="1920"
                    style={{
                        display: 'none',
                        transform: 'scaleX(-1)',
                    }}
                    autoPlay
                />
            </div>
        </div>
    );
}

export default memo(Facedetection);
