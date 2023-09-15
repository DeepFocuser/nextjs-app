'use client';

import {memo, useEffect, useRef, useState} from 'react';
import {IProject} from './types';
import Link from 'next/link';

import Image from 'next/image';
import {VscGithubInverted} from 'react-icons/vsc';
import {IoLogoVercel} from 'react-icons/io5';
import {motion} from 'framer-motion';
import {Frank_Ruhl_Libre} from 'next/font/google';
import {IoMdCloseCircle} from 'react-icons/io';

const nameFont = Frank_Ruhl_Libre({
    weight: ['500'],
    subsets: ['latin'], // style: ['italic'],
    display: 'swap',
});

const cardFont = Frank_Ruhl_Libre({
    weight: ['900'],
    subsets: ['latin'], // style: ['italic'],
    display: 'swap',
});

const Projectcard = ({
                         name,
                         image_path,
                         deployed_url,
                         description,
                         github_url,
                         key_techs,
                     }: IProject) => {
    const [showDetail, setShowDetail] = useState(false);
    const startPosition = useRef<any>([0, 0]); // x, y좌표
    const cardRef = useRef<any>(null);
    const nameRef = useRef<any>(null);
    const blockRef = useRef<any>(null);

    useEffect(() => {
        // 메뉴 판 외부 및 x표시  메뉴를 숨깁니다.
        function handleClickOutside(event: KeyboardEvent | MouseEvent) {
            if (event.target === blockRef.current) setShowDetail(false);

            if ('key' in event && event.key === 'Escape') setShowDetail(false);
        }

        // 이벤트 리스너를 추가
        document.addEventListener('keydown', handleClickOutside);
        document.addEventListener('mousedown', handleClickOutside);
        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            document.removeEventListener('keydown', handleClickOutside);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function projectClick(event: MouseEvent) {
            const [windowX, windowY] = [window.innerWidth, window.innerHeight];
            if (
                event.target === cardRef.current ||
                event.target === nameRef.current
            ) {
                const [currentX, currentY] = [event.clientX, event.clientY];
                startPosition.current = [
                    Math.floor((currentX - windowX / 2) / 2),
                    Math.floor((currentY - windowY * 0.15) / 2),
                ];
            }
        }

        document.addEventListener('mousedown', projectClick);
        return () => {
            document.removeEventListener('mousedown', projectClick);
        };
    }, [startPosition]);

    // 팝업시 바깥 스크롤동작 금지시키기
    useEffect(() => {
        if (showDetail) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showDetail]);

    return (
        <>
            <Image
                ref={cardRef}
                src={image_path}
                alt={name}
                className="mx-auto cursor-pointer rounded-2xl"
                onClick={() => setShowDetail(true)}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk2OtBwABZQDCADJyswAAAABJRU5ErkJggg=="
                width={1280}
                height={720}
                quality={100}
                priority={true}
                unoptimized={false}
            />
            {/*${'bg-gradient-to-r'} ${'from-orange-500'} ${'to-orange-300'} {bg-clip-text*/}
            <div
                onClick={() => setShowDetail(true)}
                ref={nameRef}
                className={`${'text-center'} ${'pt-0.5'} ${'font-bold'} ${'text-md'} ${'max-[319px]:text-sm'} ${'text-white'} ${'cursor-pointer'} ${
                    nameFont.className
                }`}
            >
                {name}
            </div>
            {/*z index는 큰걸로 해놓자*/}
            {showDetail && (
                <div
                    className="fixed inset-0 z-[21] h-full w-full bg-gray-700 bg-opacity-50"
                    ref={blockRef}
                />
            )}
            {showDetail && (
                <motion.div
                    className="projects-scrollbar fixed left-[calc(100%/6)] top-[15%] z-[21] h-[36%] w-8/12 overflow-y-scroll rounded-l-2xl bg-gradient-to-r from-blue-200 to-purple-300 p-2 text-black md:h-[44%] lg:h-[34%] xl:h-[38%] 2xl:h-[42%]"
                    initial={{opacity: 0.8, scale: 1}}
                    animate={{
                        scale: [0.5, 0.75, 1],
                        opacity: [0.8, 0.9, 1],
                        x: [startPosition.current[0], 0],
                        y: [startPosition.current[1], 0],
                    }}
                    transition={{type: 'spring', duration: 2.1}}
                >
                    <div
                        onClick={() => setShowDetail(false)}
                        className="sticky right-0 top-0 flex justify-end rounded-2xl text-right focus:outline-none"
                    >
                        <IoMdCloseCircle size={30}/>
                    </div>
                    <div className="grid gap-x-4 lg:grid-cols-2">
                        <div>
                            <Image
                                src={image_path}
                                alt={name}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk2OtBwABZQDCADJyswAAAABJRU5ErkJggg=="
                                className="mx-auto rounded-2xl"
                                width={1280}
                                height={720}
                                quality={100}
                                priority={true}
                                unoptimized={false}
                            />
                            <div className="mt-2 flex justify-center">
                                <Link
                                    href={github_url}
                                    target="_blank"
                                    className="mr-6 flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 p-2 text-sm font-bold text-white max-[340px]:mr-3 max-[340px]:p-1 max-[340px]:text-xs"
                                >
                                    <VscGithubInverted/> <span>Github</span>
                                </Link>
                                <Link
                                    href={deployed_url}
                                    target="_blank"
                                    className="flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 p-2 text-sm font-bold text-white max-[340px]:p-1 max-[340px]:text-xs"
                                >
                                    <IoLogoVercel/> <span>Deployed</span>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h2
                                className={`${
                                    cardFont.className
                                } ${'mb-2'} ${'text-2xl'} ${'flex-wrap'} ${'font-bold'} ${'max-[350px]:text-xl'}`}
                            >
                                {name}
                            </h2>
                            <h3
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                                className="mb-2"
                            ></h3>
                            <div className="mt-2 flex flex-wrap text-sm">
                                {key_techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="my-1.5 mr-4 rounded-xl bg-base-300/5 p-1 font-bold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default memo(Projectcard);
