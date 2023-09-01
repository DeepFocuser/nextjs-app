// https://www.npmjs.com/package/nextjs-google-analytics
import Link from 'next/link';

export default function Home() {
    return (
        <div className="mx-auto mb-36 px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8">
            <div className="grid gap-y-8 lg:gap-x-16">
                <div className="text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                    <h1 className="text-2xl font-bold text-gray-300 sm:text-3xl">
                        Welcome to DeepFocuser Home
                    </h1>
                    <p className="mt-1.5 text-sm text-gray-400">
                        Welcome to my world! 🎉
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-1 md:gap-12 lg:grid-cols-1">
                    <Link
                        className="block rounded-xl border border-blue-300/10 p-8 shadow-xl shadow-blue-300/10 transition hover:shadow-blue-300"
                        href="/about"
                    >
                        <span className="inline-block rounded-lg p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-blue-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>
                        </span>
                        <h2 className="mt-2 font-bold text-blue-300">
                            Portfolio
                        </h2>
                        <p className="mt-1 block text-sm text-gray-400">
                            about my career
                        </p>
                    </Link>

                    <Link
                        className="block rounded-xl border border-pink-300/10 p-8 shadow-xl shadow-pink-300/10 transition hover:shadow-pink-300"
                        href="/practice"
                    >
                        <span className="inline-block rounded-lg p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-pink-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>
                        </span>

                        <h2 className="mt-2 font-bold text-pink-300">
                            Help For Develop
                        </h2>

                        <p className="mt-1 block text-sm text-gray-400">
                            For React or Next Development
                        </p>
                    </Link>

                    <div className="block rounded-xl border border-green-300/10 p-8 shadow-xl shadow-green-300/10 transition hover:shadow-green-300">
                        <span className="inline-block rounded-lg p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>
                        </span>

                        <h2 className="mt-2 font-bold text-green-300">
                            AI Contents
                        </h2>

                        <Link
                            href="/humanmatting"
                            className="btn-primary btn-xs btn mr-2 normal-case"
                        >
                            HumanMatting
                        </Link>
                        <Link
                            href="/humanmattingbetter"
                            className="btn-secondary btn-xs btn mr-2 mt-2 normal-case"
                        >
                            HumanMatting Better
                        </Link>
                        <Link
                            href="/facedetection"
                            className="btn-warning btn-xs btn mr-2 mt-2 normal-case"
                        >
                            Face Detection
                        </Link>
                        <Link
                            href="/vad"
                            className="btn-success btn-xs btn mr-2 mt-2 normal-case"
                        >
                            Voice Activity Detection
                        </Link>
                        <Link
                            href="/posedetection"
                            className="btn-info btn-xs btn mr-2 mt-2 normal-case"
                        >
                            Pose Detection
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
