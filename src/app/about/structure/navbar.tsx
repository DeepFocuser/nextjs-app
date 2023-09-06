'use client';

import {memo, useEffect, useState} from 'react'
import Link from 'next/link'
import {usePathname} from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();
    const [active, setActive] = useState<string>(() => {
        const currentPath = pathname.split("/").at(-1);
        if (currentPath)
            return currentPath?.slice(0, 1).toUpperCase() + currentPath?.slice(1);
        else
            return "";
    });

    useEffect(() => {
        const currentPath = pathname.split("/").at(-1);
        if (currentPath)
            setActive(currentPath?.slice(0, 1).toUpperCase() + currentPath?.slice(1));
        else
            setActive("");
    }, [pathname])

    return (
        <div className='flex items-center justify-between px-5 py-3 my-3'>
            <span className='text-xl font-bold border-b-4 md:text-2xl border-blue-500'>
            {active}
            </span>
            <div className='flex text-base font-bold md:text-xl'>
                <div className="transition hover:text-blue-500 hover:scale-125">
                    <Link
                        className='mx-2 cursor-pointer'
                        href='/about'>
                        About
                    </Link>
                </div>
                <div className="transition hover:text-blue-500 hover:scale-125">
                    <Link
                        className='mx-2 cursor-pointer'
                        href='/about/skills'>
                        Skills
                    </Link>
                </div>
                <div className="transition hover:text-blue-500 hover:scale-125">
                    <Link
                        className='mx-2 cursor-pointer'
                        href='/about/projects'>
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(Navbar);
