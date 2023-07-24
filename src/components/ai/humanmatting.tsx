'use client';
// // https://github.com/PeterL1n/RobustVideoMatting/blob/tfjs/index.html
// // https://dev.to/yuikoito/tensorflow-next-js-typescript-remove-background-and-add-virtual-background-image-with-web-camera-296k

import {memo, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {ModelInfo} from "@/types";
import getWebcam from '@/utils/webcam';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgpu';
// 처음에 recoil 사용해서 하려고 했으나, useLayoutEffect을 사용하면 될일 이었음.
// import {useSetRecoilState} from 'recoil';
// import {webCamStateAtom} from '../../utils/recoilatoms';


function Humanmatting({backendName, modelName}: ModelInfo) {

    const [playing, setPlaying] = useState<boolean>(false);

    //const setWebCamStateAtom = useSetRecoilState(webCamStateAtom);
    const videoRef = useRef<any>(null);
    const canvasRef = useRef<any>(null);
    const [model, setModel] = useState<any>(null);

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
        const webcamElement = videoRef.current;
        const webcam = await tf.data.webcam(webcamElement, {
            resizeWidth: 384, resizeHeight: 384,
        });

        // Inference loop
        while (true) {
            await tf.nextFrame();
            const img = await webcam.capture();
            const input = img.expandDims(0); // normalize input
            let [hi1, hi2, hi3, hi4] = [tf.zeros([1, 20, 24, 24]), tf.zeros([1, 16, 48, 48]), tf.zeros([1, 12, 96, 96]), tf.zeros([1, 10, 192, 192])];
            const [output, ho1, ho2, ho3, ho4] = model.execute({input, hi1, hi2, hi3, hi4}, // provide inputs
                ['output', 'ho1', 'ho2', 'ho3', 'ho4']   // select outputs
            );

            // // Draw the result based on selected view
            // const viewOption = select.value;
            // } if (viewOption === 'white') {
            //     drawMatte(fgr.clone(), pha.clone(), canvas);
            //     canvas.style.background = 'rgb(255, 255, 255)';
            // } else if (viewOption === 'green') {
            //     drawMatte(fgr.clone(), pha.clone(), canvas);
            //     canvas.style.background = 'rgb(120, 255, 155)';
            // } else if (viewOption === 'alpha') {
            //     drawMatte(null, pha.clone(), canvas);
            //     canvas.style.background = 'rgb(0, 0, 0)';
            // }
            // // Dispose old tensors.
            // tf.dispose([img, src, fgr, pha, r1i, r2i, r3i, r4i]);
            //
            // // Update recurrent states.
            // [r1i, r2i, r3i, r4i] = [r1o, r2o, r3o, r4o];
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
            getWebcam((stream: any) => {
                videoRef.current.srcObject = stream;
                // setWebCamStateAtom(stream);
            });
            inference();
        }
        return () => {
            if (videoRef.current?.srcObject !== null) {
                const s = videoRef.current?.srcObject;
                s?.getTracks().forEach((track: MediaStreamTrack) => {
                    track.stop();
                });
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
                style={{
                    objectFit: 'cover', transform: 'scaleX(-1)',
                }}
                autoPlay
            />
        </div>
    </div>);
}

export default memo(Humanmatting);
