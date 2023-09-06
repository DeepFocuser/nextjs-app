'use client';

import { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const [active, setActive] = useState<string>(() => {
        const currentPath = pathname.split('/').at(-1);
        if (currentPath)
            return (
                currentPath?.slice(0, 1).toUpperCase() + currentPath?.slice(1)
            );
        else return '';
    });

    useEffect(() => {
        const currentPath = pathname.split('/').at(-1);
        if (currentPath)
            setActive(
                currentPath?.slice(0, 1).toUpperCase() + currentPath?.slice(1),
            );
        else setActive('');
    }, [pathname]);

    return (
        <div className="my-3 flex items-center justify-between px-5 py-3">
            <span className="border-b-4 border-blue-500 text-xl font-bold md:text-2xl">
                {active}
            </span>
            <div className="flex text-base font-bold md:text-xl">
                <div className="transition hover:scale-125 hover:text-blue-500">
                    <Link className="mx-2 cursor-pointer" href="/about">
                        About
                    </Link>
                </div>
                <div className="transition hover:scale-125 hover:text-blue-500">
                    <Link className="mx-2 cursor-pointer" href="/about/skills">
                        Skills
                    </Link>
                </div>
                <div className="transition hover:scale-125 hover:text-blue-500">
                    <Link
                        className="mx-2 cursor-pointer"
                        href="/about/projects"
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default memo(Navbar);
