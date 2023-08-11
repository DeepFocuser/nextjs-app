// const Vad = dynamic(() => import("@/components/ai/vad"), {ssr: false})
import Vad from '@/components/ai/vad';

export default function Home() {
    return <Vad modelPath="./models/vad/silero_vad.onnx" />;
}
