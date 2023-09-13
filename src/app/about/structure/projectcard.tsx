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
    weight: ['500'], subsets: ['latin'], // style: ['italic'],
    display: 'swap',
});

const cardFont = Frank_Ruhl_Libre({
    weight: ['900'], subsets: ['latin'], // style: ['italic'],
    display: 'swap',
});

const Projectcard = ({
                         name, image_path, deployed_url, description, github_url, key_techs,
                     }: IProject) => {
    const [showDetail, setShowDetail] = useState(false);
    const divRef = useRef<any>(null);

    useEffect(() => {
        // 메뉴 판 외부 및 x표시  메뉴를 숨깁니다.
        function handleClickOutside(event: KeyboardEvent | MouseEvent) {
            if (event.target === divRef.current) setShowDetail(false);

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

    return (<>
        <Image
            src={image_path}
            alt={name}
            className="mx-auto cursor-pointer rounded-2xl"
            onClick={() => setShowDetail(true)}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk2OtBwABZQDCADJyswAAAABJRU5ErkJggg=="
            width={640}
            height={480}
            quality={100}
            priority={true}
            unoptimized={false}
        />
        {/*${'bg-gradient-to-r'} ${'from-orange-500'} ${'to-orange-300'} {bg-clip-text*/}
        <div
            onClick={() => setShowDetail(true)}
            className={`${'text-center'} ${'pt-1'} ${'font-bold'} ${'text-md'} ${'text-white'} ${nameFont.className}`}
        >
            {name}
        </div>
        {/*z index는 큰걸로 해놓자*/}
        {showDetail && (
            <div className="fixed inset-0 z-[998] h-full w-full bg-gray-700 bg-opacity-50" ref={divRef}/>)}
        {showDetail && (<motion.div
            className="body-scrollbar fixed left-[calc(100%/6)] top-[20%] z-[999] grid max-h-[32rem] w-8/12 gap-x-12 overflow-y-scroll rounded-2xl bg-gradient-to-r from-blue-200 to-purple-300 p-3 text-black max-[639px]:top-[12%] md:grid-cols-2"
            initial={{opacity: 0.0, scale: 0.7}}
            animate={{
                scale: [0.5, 0.75, 1], opacity: [0.0, 0.5, 1], y: [210, 0],
            }}
            transition={{type: 'spring', duration: 1}}
        >
            <div className="mt-8">
                <Image
                    src={image_path}
                    alt={name}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk2OtBwABZQDCADJyswAAAABJRU5ErkJggg=="
                    className="mx-auto rounded-2xl"
                    width={640}
                    height={480}
                    quality={100}
                    priority={true}
                    unoptimized={false}
                />
                <div className="my-1 flex justify-center">
                    <Link
                        href={github_url}
                        target="_blank"
                        className="mr-6 mt-4 flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 p-2 text-sm font-bold text-white max-[340px]:mr-3 max-[340px]:p-1 max-[340px]:text-xs"
                    >
                        <VscGithubInverted/> <span>Github</span>
                    </Link>
                    <Link
                        href={deployed_url}
                        target="_blank"
                        className="mt-4 flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 p-2 text-sm font-bold text-white max-[340px]:p-1 max-[340px]:text-xs"
                    >
                        <IoLogoVercel/> <span>Deployed</span>
                    </Link>
                </div>
            </div>

            <div className="mt-8 max-[767px]:mt-2">
                <h2
                    className={`${cardFont.className} ${'mb-2'} ${'text-2xl'} ${'flex-wrap'} ${'font-bold'} ${'max-[350px]:text-xl'}`}
                >
                    {name}
                </h2>
                <h3
                    dangerouslySetInnerHTML={{__html: description}}
                    className="mb-2"
                ></h3>
                <div className="mt-4 flex flex-wrap text-sm">
                    {key_techs.map((tech) => (<span
                        key={tech}
                        className="my-1.5 mr-4 rounded-xl bg-base-300/5 p-1 font-bold"
                    >
                                    {tech}
                                </span>))}
                </div>
            </div>

            <button
                onClick={() => setShowDetail(false)}
                className="absolute right-1 top-1 rounded-2xl p-1 focus:outline-none"
            >
                <IoMdCloseCircle size={30}/>
            </button>
        </motion.div>)}
    </>);
};

export default memo(Projectcard);
