// "use client" does not need to be defined in every file.
// The Client module boundary only needs to be defined once, at the "entry point",
import FacedetectionTF from '@/components/ai/facedetectiontf';

export default function Home() {
    return (
        <FacedetectionTF
            backendName="webgl"
            modelPath="/models/facedetectiontf/model.json"
        />
    );
}
