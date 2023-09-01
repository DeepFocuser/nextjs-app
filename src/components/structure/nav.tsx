import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './theme';
// import dynamic from 'next/dynamic'
// const Provider = dynamic(() => import('../themeproviders'), {ssr: true})
// const ThemeSwitch = dynamic(() => import('@/components/theme'), {ssr: true})

function Nav() {
    return (
        <nav className="border-b-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn-ghost btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-56 border-green-300 bg-base-100 p-1 font-bold shadow shadow-xl shadow-green-300"
                        >
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="/practice">Help For Develop</Link>
                            </li>
                            <li>
                                <Link href="/humanmatting">
                                    <p className="text-left">✅</p>HumanMatting
                                </Link>
                            </li>
                            <li>
                                <Link href="/humanmattingbetter">
                                    <p className="text-left">✅</p>HumanMatting
                                    better
                                </Link>
                            </li>
                            <li>
                                <Link href="/facedetection">
                                    <p className="text-left">✅</p>FaceDetection
                                </Link>
                            </li>
                            <li>
                                <Link href="/vad">
                                    <p className="text-left">✅</p>
                                    VoiceActivityDetection
                                </Link>
                            </li>
                            <li>
                                <Link href="/posedetection">
                                    <p className="text-left">✅</p>
                                    PoseDetection
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link
                                href="/"
                                className="mx-2 block rounded-xl border border-gray-300/10 p-3 font-bold text-gray-300 shadow-xl shadow-gray-300/10 transition hover:shadow-gray-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="mx-2 block rounded-xl border border-blue-300/10 p-3 font-bold text-blue-300 shadow-xl shadow-blue-300/10 transition hover:shadow-blue-300"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/practice"
                                className="mx-2 block rounded-xl border border-pink-300/10 p-3 font-bold text-pink-300 shadow-xl shadow-pink-300/10 transition hover:shadow-pink-300"
                            >
                                Help For Develop
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary className="mx-2 rounded-xl border border-green-300/10 p-3 font-bold text-green-300 shadow-xl shadow-green-300/10 transition hover:shadow-green-300">
                                    AI
                                </summary>
                                <ul className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-56 border-green-300 bg-base-100 p-1 font-bold shadow shadow-xl shadow-green-300">
                                    <li>
                                        <Link href="/humanmatting">
                                            <p className="text-left">✅</p>
                                            HumanMatting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/humanmattingbetter">
                                            <p className="text-left">✅</p>
                                            HumanMatting better
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/facedetection">
                                            <p className="text-left">✅</p>
                                            FaceDetection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vad">
                                            <p className="text-left">✅</p>
                                            VoiceActivityDetection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/posedetection">
                                            <p className="text-left">✅</p>
                                            PoseDetection
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeSwitch />
                    <div className="avatar w-16 sm:block">
                        <div className="mask mask-squircle w-full">
                            <Image
                                src="https://avatars.githubusercontent.com/u/58889565?s=96&v=4"
                                alt="Picture of DeepFocuser"
                                width={320}
                                height={320}
                                quality={100}
                                priority={true}
                                unoptimized={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
