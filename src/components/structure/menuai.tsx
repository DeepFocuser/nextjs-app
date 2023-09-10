'use client';

import Link from 'next/link';
import React, { useState } from 'react';

function MenubarAi() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={toggleDropdown}
                className="border-1 hover:border-1 flex rounded-xl border border-green-200 bg-base-100 p-3 font-bold text-green-500 shadow-xl shadow-green-300/10 transition hover:scale-110 hover:border hover:border-green-200 hover:bg-base-100 active:text-green-700 active:shadow-green-300"
            >
                AI&nbsp;
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
                        d="m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.979 5c.043.522.153 1.025.321 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3.704-.024 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-2.598-3.976c-.328.456-.594.96-.785 1.5h-9.092c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm7.373-3.25c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z"
                    />
                </svg>
            </button>
            {isOpen && (
                <ul className="menu rounded-box menu-sm absolute z-[1] mt-3 w-56 border-green-300 bg-base-100 p-1 font-bold shadow-xl shadow-green-300">
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
                </ul>
            )}
        </div>
    );
}

export default MenubarAi;