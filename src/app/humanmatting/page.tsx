// "use client" does not need to be defined in every file.
// The Client module boundary only needs to be defined once, at the "entry point",
import Humanmatting from '../../components/ai/humanmatting';

export default function Home() {
    // 2023-07-25 아직까지는 webgl인가
    return (
        <Humanmatting
            backendName="webgl"
            modelName="/models/humanmatting/model.json"
        />
    );
}
