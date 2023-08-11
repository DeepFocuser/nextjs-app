import Image from 'next/image';
import Link from 'next/link';
import ThemeSwitch from './theme';
// import dynamic from 'next/dynamic'
// const Provider = dynamic(() => import('../themeproviders'), {ssr: true})
// const ThemeSwitch = dynamic(() => import('@/components/theme'), {ssr: true})

function Nav() {
    return (<nav className="border-b-2">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn-ghost btn">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-56 bg-base-300 p-1 font-bold shadow"
                        >
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/humanmatting">
                                    <p className="text-left">✅</p>HumanMatting
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
                        </ul>
                    </div>
                    <ul className="container steps mx-auto hidden md:steps-horizontal md:block md:inline-grid">
                        <li data-content="✅" className="step-neutral step">
                            <Link
                                href="/humanmatting"
                                className="btn-accent btn-sm btn text-xs normal-case"
                            >
                                HM
                            </Link>
                        </li>
                        <li data-content="✅" className="step-neutral step">
                            <Link
                                href="/facedetection"
                                className="btn-accent btn-sm btn text-xs normal-case"
                            >
                                FD
                            </Link>
                        </li>
                        <li data-content="✅" className="step-neutral step">
                            <Link
                                href="/vad"
                                className="btn-accent btn-sm btn text-xs normal-case"
                            >
                                VD
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:block">
                    <Link href="/" className="btn-ghost btn h-fit text-xl">
                        <progress className="progress-error progress"></progress>
                        <div className="my-1 flex gap-0.5 text-xs">
                            <kbd className="kbd kbd-md">D</kbd>
                            <kbd className="kbd kbd-md">e</kbd>
                            <kbd className="kbd kbd-md">e</kbd>
                            <kbd className="kbd kbd-md">p</kbd>
                            <kbd className="kbd kbd-md">F</kbd>
                            <kbd className="kbd kbd-md">o</kbd>
                            <kbd className="kbd kbd-md">c</kbd>
                            <kbd className="kbd kbd-md">u</kbd>
                            <kbd className="kbd kbd-md">s</kbd>
                            <kbd className="kbd kbd-md">e</kbd>
                            <kbd className="kbd kbd-md">r</kbd>
                        </div>
                        <progress className="progress-success progress"></progress>
                    </Link>
                </div>
                <div className="navbar-end">
                    <ThemeSwitch/>
                    <div className="avatar w-10 sm:block">
                        <div className="mask mask-squircle w-full">
                            <Image
                                src="https://avatars.githubusercontent.com/u/58889565?s=96&v=4"
                                alt="Picture of DeepFocuser"
                                width={256}
                                height={256}
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
