import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './theme';
// import dynamic from 'next/dynamic'
// const Provider = dynamic(() => import('../themeproviders'), {ssr: true})
// const ThemeSwitch = dynamic(() => import('@/components/theme'), {ssr: true})

function Nav() {
    return (<nav className="border-b-2">
        <div className="navbar bg-base-100">
            <div className="navbar-start lg:hidden">
                <div className="dropdown p-0">
                    <details>
                        <summary
                            className="btn mx-2 rounded-xl border border-green-300/10 p-3 font-bold text-green-300 shadow-xl shadow-green-300/10 transition hover:shadow-green-300">
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
                        </summary>
                        <ul
                            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-56 border-green-300 bg-base-100 p-1 font-bold shadow-xl shadow-green-300"
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
                                    <p className="text-left">🔴</p>
                                    HumanMatting
                                </Link>
                            </li>
                            <li>
                                <Link href="/humanmattingbetter">
                                    <p className="text-left">🟠</p>
                                    HumanMatting better
                                </Link>
                            </li>
                            <li>
                                <Link href="/facedetection">
                                    <p className="text-left">🟢</p>
                                    FaceDetection
                                </Link>
                            </li>
                            <li>
                                <Link href="/vad">
                                    <p className="text-left">🔵</p>
                                    VoiceActivityDetection
                                </Link>
                            </li>
                            <li>
                                <Link href="/posedetection">
                                    <p className="text-left">🟣</p>
                                    PoseDetection
                                </Link>
                            </li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu-horizontal menu-sm px-1">
                    <li>
                        <Link
                            href="/"
                            className="mx-2 flex rounded-xl border border-gray-300/10 p-3 font-bold text-gray-500 hover:text-gray-500 shadow-xl shadow-gray-300/10 transition hover:shadow-gray-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="flex rounded-xl border border-blue-300/10 p-3 font-bold text-blue-500 hover:text-blue-500 shadow-xl shadow-blue-300/10 transition hover:shadow-blue-300"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/practice"
                            className="mx-2 flex rounded-xl border border-pink-300/10 p-3 font-bold text-pink-500 hover:text-pink-500 shadow-xl shadow-pink-300/10 transition hover:shadow-pink-300"
                        >
                            Help For Develop
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown p-0">
                            <details>
                                <summary
                                    className="flex rounded-xl border border-green-300/10 p-3 font-bold text-green-500 shadow-xl shadow-green-300/10 transition hover:shadow-green-300">
                                    AI &nbsp;
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
                                            strokeWidth="1"
                                            d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.979 5c.043.522.153 1.025.321 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3.704-.024 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-2.598-3.976c-.328.456-.594.96-.785 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.373-3.25c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"/>
                                    </svg>
                                </summary>
                                <ul className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-56 border-green-300 bg-base-100 p-1 font-bold shadow-xl shadow-green-300">
                                    <li>
                                        <Link href="/humanmatting">
                                            <p className="text-left">🔴</p>
                                            HumanMatting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/humanmattingbetter">
                                            <p className="text-left">🟠</p>
                                            HumanMatting better
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/facedetection">
                                            <p className="text-left">🟢</p>
                                            FaceDetection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vad">
                                            <p className="text-left">🔵</p>
                                            VoiceActivityDetection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/posedetection">
                                            <p className="text-left">🟣</p>
                                            PoseDetection
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </div>
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
