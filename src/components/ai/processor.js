class MyAudioWorkletProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super();
        // 전달받은 파라미터 사용
        this.myParameter = options.processorOptions.modelPath || '';
    }
    process(inputs, outputs, parameters) {
        const input = inputs[0][0]; // 0번째 입력 채널의 데이터
        const output = outputs[0][0]; // 0번째 출력 채널의 데이터

        console.log(input.length);
        // 입력 데이터 복사
        const float32Array = new Float32Array(input.length);
        float32Array.set(input);

        // 여기서 필요한 처리 수행

        // 출력에 입력 데이터 복사
        output.set(input);

        return true; // true 반환하여 계속 프로세싱 유지
    }
}

registerProcessor('processor', MyAudioWorkletProcessor);
