const getWebcam = (callback: any) => {
    try {
        const constraints = {
            video: true,
            audio: false,
        };
        navigator.mediaDevices.getUserMedia(constraints).then(callback);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

export default getWebcam;
