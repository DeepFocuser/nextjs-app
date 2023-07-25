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


    // const drawMatte = async (fgr, pha, canvas) => {
    //     const rgba = tf.tidy(() => {
    //         const rgb = (fgr !== null) ? fgr.squeeze(0).mul(255).cast('int32') : tf.fill([pha.shape[1], pha.shape[2], 3], 255, 'int32');
    //         const a = (pha !== null) ? pha.squeeze(0).mul(255).cast('int32') : tf.fill([fgr.shape[1], fgr.shape[2], 1], 255, 'int32');
    //         return tf.concat([rgb, a], -1);
    //     });
    //     fgr && fgr.dispose();
    //     pha && pha.dispose();
    //     const [height, width] = rgba.shape.slice(0, 2);
    //     const pixelData = new Uint8ClampedArray(await rgba.data());
    //     const imageData = new ImageData(pixelData, width, height);
    //     canvas.width = width;
    //     canvas.height = height;
    //     canvas.getContext('2d').putImageData(imageData, 0, 0);
    //     rgba.dispose();
    // }

    // 비동기 처리1 - backend, Model Loading 하기
    const setENV = async () => {
        await tf.setBackend(backendName);
        setModel(await tf.loadGraphModel(modelName));
        return `Model Load Completed in ${tf.getBackend()}`;
    }

    // 비동기 처리2 - model inference
    const inference = async () => {

        // 카메라 1개만 선택하기
        let deviceId = "";
        for (const camera of await navigator.mediaDevices.enumerateDevices()) {
            if (camera.kind.startsWith("video")) {
                deviceId = camera.deviceId;
                break;
            }
        }

        // 배경이미지 가져오기
        // https://www.youtube.com/watch?v=kSSycUT0r1M
        // 배경이미지
        // const temp = new Image();
        // tf.image.
        // temp.src = '/images/sample.jpg';
        // const background = tf.browser.fromPixels(temp);
        // const resizedBackground = tf.image.resizeBilinear(background, [384, 384]);
        // tf.dispose(background);
        // console.log(resizedBackground.shape);

        // 내 모델은 384x384x3 을 입력으로 받음
        if (inferRef.current && deviceId !== "") {
            const webcam = await tf.data.webcam(videoRef.current, {
                deviceId, resizeWidth: 384, resizeHeight: 384
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
                    //drawMatte(img.clone(), output.clone(), canvasRef);

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
            <canvas></canvas>
        </div>
    </div>);
}

export default memo(Humanmatting);
