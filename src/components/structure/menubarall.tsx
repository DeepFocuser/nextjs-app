'use client';

import Link from 'next/link';
import React, {useState} from 'react';

function MenubarAll() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    // const handleClickOutside = (event) => {
    //     if (!event.target.closest('.anchor')) {
    //         setIsOpen(false);
    //     }
    // };

    return (<div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="border-1 hover:border-1 mx-0.5 flex rounded-xl border border-green-200 bg-base-100 p-3 font-bold text-green-500 shadow-xl shadow-green-300/10 transition hover:scale-110 hover:border hover:border-green-200 hover:bg-base-100 active:text-green-700 active:shadow-green-300"
            >
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
            </button>
            {isOpen && (
                <ul className="menu rounded-box menu-sm absolute z-[1] mt-3 w-56 border-green-300 bg-base-100 p-1 font-bold shadow-xl shadow-green-300">
                    <li>
                        <Link href="/" onClick={closeDropdown}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            onClick={closeDropdown}
                            scroll={false}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="/practice" onClick={closeDropdown}>
                            Help For Develop
                        </Link>
                    </li>
                    <li>
                        <Link href="/humanmatting" onClick={closeDropdown}>
                            <p className="text-left">🔴</p>
                            HumanMatting
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/humanmattingbetter"
                            onClick={closeDropdown}
                        >
                            <p className="text-left">🟠</p>
                            HumanMatting better
                        </Link>
                    </li>
                    <li>
                        <Link href="/facedetection" onClick={closeDropdown}>
                            <p className="text-left">🟢</p>
                            FaceDetection
                        </Link>
                    </li>
                    <li>
                        <Link href="/vad" onClick={closeDropdown}>
                            <p className="text-left">🔵</p>
                            VoiceActivityDetection
                        </Link>
                    </li>
                    <li>
                        <Link href="/posedetection" onClick={closeDropdown}>
                            <p className="text-left">🟣</p>
                            PoseDetection
                        </Link>
                    </li>
                </ul>)}
        </div>);
}

export default MenubarAll;
