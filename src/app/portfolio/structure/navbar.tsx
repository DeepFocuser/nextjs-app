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
        <>
            <div className="my-3 flex items-center justify-between px-4 max-[430px]:hidden">
                <div className="border-b-4 border-blue-500 text-2xl font-bold">
                    {active}
                </div>
                <div className="flex justify-end text-base text-xl font-bold">
                    <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500">
                        <Link className="mx-2" href="/portfolio/about">
                            About
                        </Link>
                    </div>
                    <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500">
                        <Link className="mx-2" href="/portfolio/skills">
                            Skills
                        </Link>
                    </div>
                    <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500">
                        <Link className="mx-2" href="/portfolio/projects">
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
            <div className="my-3 flex items-center justify-center min-[430px]:hidden">
                <div className="flex text-base text-lg font-bold">
                    {active === 'About' ? (
                        <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500">
                            <Link
                                className="mx-2 border-b-4 border-blue-500 max-[300px]:mx-1"
                                href="/portfolio/about"
                            >
                                About
                            </Link>
                        </div>
                    ) : (
                        <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500 ">
                            <Link
                                className="mx-2 max-[300px]:mx-1"
                                href="/portfolio/about"
                            >
                                About
                            </Link>
                        </div>
                    )}
                    {active === 'Skills' ? (
                        <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500">
                            <Link
                                className="mx-2 border-b-4 border-blue-500 max-[300px]:mx-1"
                                href="/portfolio/skills"
                            >
                                Skills
                            </Link>
                        </div>
                    ) : (
                        <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500 ">
                            <Link
                                className="mx-2 max-[300px]:mx-1"
                                href="/portfolio/skills"
                            >
                                Skills
                            </Link>
                        </div>
                    )}
                    {active === 'Projects' ? (
                        <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500">
                            <Link
                                className="mx-2 border-b-4 border-blue-500 max-[300px]:mx-1"
                                href="/portfolio/projects"
                            >
                                Projects
                            </Link>
                        </div>
                    ) : (
                        <div className="transition hover:scale-105 hover:text-blue-500 active:text-blue-500 ">
                            <Link
                                className="mx-2 max-[300px]:mx-1"
                                href="/portfolio/projects"
                            >
                                Projects
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default memo(Navbar);
