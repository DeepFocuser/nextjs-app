import Link from 'next/link';

export default function Home() {
    return (<div
            className="hero min-h-screen"
            style={{
                backgroundImage: 'url(/images/background.jpg)', backgroundRepeat: 'repeat',
            }}
        >
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-7xl">
                    <p className="text-2xl font-medium uppercase tracking-widest text-pink-400">
                        Developer
                    </p>
                    {/*https://blog.outsider.ne.kr/380 HTML 엔티티(Entities) 정리*/}
                    <h1 className="mb-5 text-4xl font-bold text-yellow-300">
                        Hello I &rsquo;m DeepFocuser
                    </h1>
                    <p className="mb-5 text-xl text-gray-200">
                        &quot;The mind is a powerful tool. When you focus on
                        something, you can achieve anything.&ldquo; - Oprah
                        Winfrey
                    </p>
                    <Link
                        className="group relative inline-block overflow-hidden border border-black px-8 py-3 ring-pink-100 focus:outline-none focus:ring-4"
                        href="https://github.com/DeepFocuser" target="_blank"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"></span>
                        <span
                            className="relative text-sm font-medium text-white transition-colors group-hover:text-white">
                            my Github
                        </span>
                    </Link>
                </div>
            </div>
        </div>);
}
