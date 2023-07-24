// "use client" does not need to be defined in every file.
// The Client module boundary only needs to be defined once, at the "entry point",
import Humanmatting from '../../components/ai/humanmatting';

// https://rubenchoi.tistory.com/20
export default function Home() {
    return <Humanmatting backendName='webgpu' modelName='/models/humanmatting/model.json'/>;
}
