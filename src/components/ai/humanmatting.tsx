'use client';
// // https://github.com/PeterL1n/RobustVideoMatting/blob/tfjs/index.html
// // https://dev.to/yuikoito/tensorflow-next-js-typescript-remove-background-and-add-virtual-background-image-with-web-camera-296k

import {memo, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {ModelInfo} from "@/types";
import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-backend-webgpu';
// 처음에 recoil 사용해서 하려고 했으나, useLayoutEffect을 사용하면 될일 이었음.
// import {useSetRecoilState} from 'recoil';
// import {webCamStateAtom} from '../../utils/recoilatoms';


function Humanmatting({backendName, modelName}: ModelInfo) {

    const [playing, setPlaying] = useState<boolean>(false);

    //const setWebCamStateAtom = useSetRecoilState(webCamStateAtom);
    const videoRef = useRef<any>(null);
    const canvasRef = useRef<any>(null);
    const inferRef = useRef<boolean>(false);
    const [model, setModel] = useState<any>(undefined);

    // 비동기 처리1 - backend, Model Loading 하기
    const setENV = async () => {
        await tf.setBackend(backendName);
        setModel(await tf.loadGraphModel(modelName));
        return `Model Load Completed in ${tf.getBackend()}`;
    }

    const drawResult = async (image, alpha, background, canvas) => {
        const result = tf.tidy(() => {
            const pha = alpha.squeeze().expandDims(2); //float32
            const one = tf.onesLike(pha); // float32
            const output = tf.add(tf.mul(pha, image), tf.mul(one - pha, background)).cast("int32");
            return tf.concat([output, pha], -1);;
        });
        image.dispose();
        alpha.dispose();
        background.dispose();

        const [height, width] = result.shape.slice(0, 2);
        const pixelData = new Uint8ClampedArray(await result.data()); // ui 안멈추게 하려고 비동기로 가져온다
        const imageData = new ImageData(pixelData, width, height);
        canvas.current.width = width;
        canvas.current.height = height;
        canvas.current.getContext('2d').putImageData(imageData, 0, 0);
        result.dispose();
    }

    // 비동기 처리2 - model inference
    const inference = async () => {

        // 카메라 1개만 선택하기
        let deviceId = "";
        let cameraCount = 0; // deviceId가 안나오는 경우도 있다.
        for (const camera of await navigator.mediaDevices.enumerateDevices()) {
            if (camera.kind.startsWith("video")) {
                deviceId = camera.deviceId;
                cameraCount += 1;
                break;
            }
        }
        // https://www.youtube.com/watch?v=kSSycUT0r1M
        // 배경이미지
        const modelHeight = 384;
        const modelWidth = 384;

        let background;
        const temp = new Image();
        temp.src = '/images/sample.jpg';
        temp.onload = () => {
            const tensor = tf.browser.fromPixels(temp);
            background = tf.image.resizeBilinear(tensor, [modelHeight, modelWidth])
            tf.dispose(tensor);
        }

        // 내 모델은 384x384x3 을 입력으로 받음
        if (inferRef.current && cameraCount > 0) {
            let webcam;
            if (deviceId !== "") webcam = await tf.data.webcam(videoRef.current, {
                deviceId, resizeWidth: modelWidth, resizeHeight: modelHeight
            }); else webcam = await tf.data.webcam(videoRef.current, {
                resizeWidth: modelWidth, resizeHeight: modelHeight
            });
            // Inference loop
            while (inferRef.current) {
                await tf.nextFrame();
                // 중간에 inferRef.current가 바뀐다.
                if (inferRef.current) {
                    const img = await webcam.capture();
                    const input = img.expandDims(0); // normalize input
                    let [hi1, hi2, hi3, hi4] = [tf.zeros([1, 20, 24, 24]), tf.zeros([1, 16, 48, 48]), tf.zeros([1, 12, 96, 96]), tf.zeros([1, 10, 192, 192])];
                    const [output, ho1, ho2, ho3, ho4] = model.execute({input, hi1, hi2, hi3, hi4}, // provide inputs
                        ['output', 'ho1', 'ho2', 'ho3', 'ho4']   // select outputs
                    );
                    await drawResult(img.clone(), output.clone(), background.clone(), canvasRef);
                    // Dispose old tensors, Update recurrent states.
                    // dispose 안해주면 메모리 치솟음
                    tf.dispose([img, input, output, hi1, hi2, hi3, hi4]);
                    [hi1, hi2, hi3, hi4] = [ho1, ho2, ho3, ho4];
                    tf.dispose([ho1, ho2, ho3, ho4]);
                }
            }
        }
    }

    // tensorflow.js backend, Model 초기화
    useEffect(() => {

        (async () => {
            console.log(await setENV());
        })();
    }, []);

    // useLayoutEffect 이거쓰면 꺼지는구나
    useLayoutEffect(() => {
        if (playing) {
            inferRef.current = true;
            inference();
        }
        return () => {
            if (videoRef.current.srcObject !== null) {
                console.log(tf.memory());
                inferRef.current = false;
                if ("getTracks" in videoRef.current.srcObject) {
                    videoRef.current.srcObject.getTracks().forEach((track: MediaStreamTrack) => {
                        track.stop();
                    });
                }

            }
        };

    }, [playing]);

    return (<div>
        <div className="mt-6 flex items-center justify-center md:justify-self-end">
            <label
                htmlFor="AcceptConditions"
                className="relative h-8 w-14 cursor-pointer"
                onChange={() => setPlaying(!playing)}
            >
                <input
                    type="checkbox"
                    id="AcceptConditions"
                    className="peer sr-only"
                />
                <span
                    className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-red-500"></span>
                <span
                    className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>
        </div>
        <div className="mt-8 flex items-center justify-center">
            <video
                ref={videoRef}
                height="512" width="512"
                style={{
                    objectFit: 'cover', transform: 'scaleX(-1)',
                }}
                autoPlay
            />
            <canvas ref={canvasRef} width="512" height="512"></canvas>
        </div>
    </div>);
}

export default memo(Humanmatting);
