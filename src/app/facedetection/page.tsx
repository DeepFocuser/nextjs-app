// "use client" does not need to be defined in every file.
// The Client module boundary only needs to be defined once, at the "entry point",
import Facedetection from '@/components/ai/facedetection';

export default function Home() {
    // 2023-07-25 아직까지는 webgl인가
    return (
        <Facedetection
            backendName="webgl"
            modelPath="/models/facedetection/model.json"
        />
    );
}
