'use client';

import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ModelInfo } from '@/types';
import * as tf from '@tensorflow/tfjs';
import { Rank } from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-backend-webgpu';
// 처음에 recoil 사용해서 하려고 했으나, useLayoutEffect을 사용하면 될일 이었음.
// import {useSetRecoilState} from 'recoil';
// import {webCamStateAtom} from '../../utils/recoilatoms';

function Humanmatting({ backendName, modelName }: ModelInfo) {
    const [playing, setPlaying] = useState<boolean>(false);

    //const setWebCamStateAtom = useSetRecoilState(webCamStateAtom);
    const videoRef = useRef<any>(null);
    const canvasRef1 = useRef<any>(null);
    const canvasRef2 = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const [model, setModel] = useState<any>(undefined);
    const inferenceRef = useRef<boolean>(false);

    // 비동기 처리1 - backend, Model Loading 하기
    const setENV = async () => {
        await tf.setBackend(backendName);
        setModel(await tf.loadGraphModel(modelName));
        return `Model Load Completed in ${tf.getBackend()}`;
    };

    // 비동기 처리2 - canvas에 그리기  하기
    const drawResult: (
        image: tf.Tensor,
        alpha: tf.Tensor,
        background: tf.Tensor,
        canvasHeight: number,
        canvasWidth: number,
    ) => void = async (image, alpha, background, canvasHeight, canvasWidth) => {
        const result: tf.Tensor<Rank>[] = tf.tidy(() => {
            const pha = alpha.squeeze().expandDims(2); //float32
            const pha255 = tf.mul(pha, 255).cast('int32');
            const one = tf.onesLike(pha);
            const rgb = tf
                .add(tf.mul(pha, image), tf.mul(tf.sub(one, pha), background))
                .cast('int32');
            const opacity = one.mul(255).cast('int32');
            return [
                tf.concat([rgb, opacity], 2),
                tf.concat([pha255, pha255, pha255, opacity], 2),
            ];
        });
        image.dispose();
        alpha.dispose();
        background.dispose();

        // result를 resize하면 될듯~
        const resizeResult = result[0].resizeBilinear([
            canvasHeight,
            canvasWidth,
        ]);
        const resizeAlphaResult = result[1].resizeBilinear([
            canvasHeight,
            canvasWidth,
        ]);

        const [height, width] = resizeAlphaResult.shape.slice(0, 2);
        const pixelData = new Uint8ClampedArray(await resizeResult.data()); //
        const pixelDataAlpha = new Uint8ClampedArray(
            await resizeAlphaResult.data(),
        ); //
        // ui 안멈추게 하려고 비동기로 가져온다
        const imageData = new ImageData(pixelData, width, height);
        const imageDataAlpha = new ImageData(pixelDataAlpha, width, height);

        canvasRef1.current?.getContext('2d').putImageData(imageData, 0, 0);
        canvasRef2.current?.getContext('2d').putImageData(imageDataAlpha, 0, 0);
        tf.dispose([result, resizeResult, resizeAlphaResult]);
    };

    // 비동기 처리3 - 배경이미지 로딩하기
    const loadImageAsync: (path: string) => Promise<tf.Tensor<Rank>> = (
        path,
    ) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = path;
            img.onload = () => {
                const tensor = tf.browser.fromPixels(img);
                const background = tf.image.resizeBilinear(tensor, [384, 384]);
                tf.dispose(tensor);
                resolve(background);
            };
            img.onerror = (e) => {
                reject(e);
            };
        });
    };

    // 비동기 처리4 - model inference
    const inference = async () => {
        canvasRef1.current.style.display = 'block';
        canvasRef2.current.style.display = 'block';

        const canvasHeight = canvasRef1.current?.height;
        const canvasWidth = canvasRef1.current?.width;

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

        // 내 모델은 384x384x3 을 입력으로 받음
        if (inferenceRef.current && cameraCount > 0) {
            let webcam;
            if (deviceId !== '')
                webcam = await tf.data.webcam(videoRef.current, {
                    deviceId,
                    resizeWidth: 384,
                    resizeHeight: 384,
                });
            else
                webcam = await tf.data.webcam(videoRef.current, {
                    resizeWidth: 384,
                    resizeHeight: 384,
                });

            // 배경 이미지 미리 Load 하기
            // https://www.youtube.com/watch?v=kSSycUT0r1M
            const url = '/images/sample.jpg';
            const background = await loadImageAsync(url);

            // model에 입력되는 rnn state 초기값
            let [hi1, hi2, hi3, hi4] = [
                tf.zeros([1, 20, 24, 24]),
                tf.zeros([1, 16, 48, 48]),
                tf.zeros([1, 12, 96, 96]),
                tf.zeros([1, 10, 192, 192]),
            ];

            // Inference loop
            while (inferenceRef.current) {
                await tf.nextFrame();
                // 중간에 inferRef.current가 바뀐다.
                if (inferenceRef.current) {
                    const img = await webcam.capture();
                    const input = tf.tidy(() => img.expandDims(0).div(255)); // normalize input
                    const [output, ho1, ho2, ho3, ho4] = model.execute(
                        { input, hi1, hi2, hi3, hi4 }, // provide inputs
                        ['output', 'ho1', 'ho2', 'ho3', 'ho4'], // select outputs
                    );
                    drawResult(
                        img.clone(),
                        output.clone(),
                        background.clone(),
                        canvasHeight,
                        canvasWidth,
                    );
                    // Dispose old tensors, Update recurrent states.
                    // dispose 안해주면 메모리 치솟음
                    tf.dispose([img, input, output, hi1, hi2, hi3, hi4]);
                    [hi1, hi2, hi3, hi4] = [ho1, ho2, ho3, ho4];
                }
            }
            tf.dispose([hi1, hi2, hi3, hi4, background]);
            if (canvasRef1.current !== null && canvasRef2.current !== null) {
                canvasRef1.current.style.display = 'none';
                canvasRef2.current.style.display = 'none';
            }
        }
    };
    // tensorflow.js backend, Model 초기화
    useEffect(() => {
        (async () => {
            console.log(await setENV());
        })();
    }, []);

    // useLayoutEffect 이거쓰면 꺼지는구나
    useLayoutEffect(() => {
        if (playing) {
            inferenceRef.current = true;
            (async () => {
                await inference();
            })();

            inputRef.current.disabled = true;
            setTimeout(() => (inputRef.current.disabled = false), 2100);
        }
        return () => {
            if (videoRef.current.srcObject !== null) {
                inferenceRef.current = false;
                // canvasRef1.current.style.display = "none";
                // canvasRef2.current.style.display = "none";
                console.log(tf.memory());
                if ('getTracks' in videoRef.current.srcObject) {
                    videoRef.current.srcObject
                        .getTracks()
                        .forEach((track: MediaStreamTrack) => {
                            track.stop();
                        });
                }
            }
        };
    }, [playing]);

    return (
        <div>
            <div className="mt-6 grid items-center justify-center md:justify-self-end">
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
            <div className="mt-8 flex items-center justify-center">
                <canvas
                    ref={canvasRef1}
                    height="480"
                    width="640"
                    style={{
                        objectFit: 'cover',
                        transform: 'scaleX(-1)',
                    }}
                ></canvas>
                <canvas
                    ref={canvasRef2}
                    height="480"
                    width="640"
                    style={{
                        objectFit: 'cover',
                        transform: 'scaleX(-1)',
                    }}
                ></canvas>
                <video
                    ref={videoRef}
                    height="480"
                    width="640"
                    style={{
                        display: 'none',
                        objectFit: 'cover',
                        transform: 'scaleX(-1)',
                    }}
                    autoPlay
                />
            </div>
        </div>
    );
}

export default memo(Humanmatting);
