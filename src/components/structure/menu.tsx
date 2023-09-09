'use client';

import Link from 'next/link';
import React, {useState} from 'react';

function Menubar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    return (<div className="relative inline-block text-left">
        <button
            onClick={toggleDropdown}
            className="group bg-blue-500 text-white rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-600"
        >
            메뉴
        </button>
        {isOpen && (<ul className="absolute text-gray-700 mt-2 space-y-2 bg-white border border-gray-300 rounded-md">
            <li>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      onClick={closeDropdown}>
                    항목 1
                </Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      onClick={closeDropdown}>
                    항목 2
                </Link>
            </li>
            <li>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                      onClick={closeDropdown}>
                    항목 3
                </Link>
            </li>
        </ul>)}
    </div>);
}

export default Menubar;