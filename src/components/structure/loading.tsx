export default function Loading() {
    return (
        <div className="absolute right-0 flex h-2/5 w-screen flex-col items-center justify-center gap-2">
            <span className="loading loading-spinner loading-lg text-info"></span>
            <p className="text-center">⏳ 잠시만 기다려주세요~ ⌛</p>
        </div>
    );
}
