'use client';
// // https://github.com/PeterL1n/RobustVideoMatting/blob/tfjs/index.html
// // https://dev.to/yuikoito/tensorflow-next-js-typescript-remove-background-and-add-virtual-background-image-with-web-camera-296k

import {memo, useLayoutEffect, useRef, useState} from 'react';
import getWebcam from '@/utils/webcam';
// 처음에 recoil 사용해서 하려고 했으나, useLayoutEffect을 사용하면 될일 이었음.
// import {useSetRecoilState} from 'recoil';
// import {webCamStateAtom} from '../../utils/recoilatoms';

function Humanmatting() {
    const [playing, setPlaying] = useState<boolean>(false);

    //const setWebCamStateAtom = useSetRecoilState(webCamStateAtom);
    const videoRef = useRef<any>(null);
    const canvasRef = useRef<any>(null);

    // useLayoutEffect 이거쓰면 꺼지는구나
    useLayoutEffect(() => {
        if (playing) {
            getWebcam((stream: any) => {
                videoRef.current.srcObject = stream;
                // setWebCamStateAtom(stream);
            });
        }
        return () => {
            if (videoRef.current?.srcObject !== null) {
                const s = videoRef.current?.srcObject;
                s?.getTracks().forEach((track: MediaStreamTrack) => {
                    track.stop();
                    // setWebCamStateAtom(null);
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
                    width: '55%', objectFit: 'cover', transform: 'scaleX(-1)',
                }}
                autoPlay
            />
        </div>
    </div>);
}

export default memo(Humanmatting);
