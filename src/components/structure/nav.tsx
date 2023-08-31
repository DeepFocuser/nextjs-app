import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './theme';
// import dynamic from 'next/dynamic'
// const Provider = dynamic(() => import('../themeproviders'), {ssr: true})
// const ThemeSwitch = dynamic(() => import('@/components/theme'), {ssr: true})

function Nav() {
    return (<nav className="border-b-2">
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-56 bg-base-200 p-1 font-bold shadow">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
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
                                <p className="text-left">✅</p>HumanMatting better
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
                <Link href="/" className="btn btn-ghost normal-case text-xl text-gray-700 bg-gray-100">
                    <progress className="progress-error progress bg-black"></progress>
                    Home
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className="mx-2 bg-purple-500 text-white" href="/">Home</Link>
                    </li>
                    <li>
                        <Link className="mx-2 bg-purple-500 text-white" href="/about">About</Link>
                    </li>
                    <li>
                        <Link className="mx-2 bg-purple-500 text-white" href="/practice">Help For Develop</Link>
                    </li>
                    <li className="mx-2 bg-green-500 text-white" tabIndex={0}>
                        <details>
                            <summary>AI</summary>
                            <ul className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-56 bg-gray-100 p-1 font-bold shadow text-black">
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
                <ThemeSwitch/>
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
    </nav>);
}

export default Nav;
