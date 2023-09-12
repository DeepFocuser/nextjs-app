'use client';

import {memo, useState} from 'react';
import {IProject} from './types';
import Link from "next/link";

import Image from 'next/image';
import {FaWindowClose} from "react-icons/fa";
import {VscGithubInverted} from "react-icons/vsc";
import {IoLogoVercel} from "react-icons/io5";
import {motion} from "framer-motion";
import {Frank_Ruhl_Libre, Secular_One} from "next/font/google";

const nameFont = Secular_One({
    weight: ['400'],
    subsets: ['latin'],
    // style: ['italic'],
    display: 'swap',
});

const cardFont = Frank_Ruhl_Libre({
    weight: ['900'],
    subsets: ['latin'],
    // style: ['italic'],
    display: 'swap',
});


const Projectcard = (

    {name, image_path, deployed_url, description, github_url, key_techs}: IProject) => {
    const [showDetail, setShowDetail] = useState(false);

    return (<div>
        <Image
            src={image_path}
            alt={name}
            className="cursor-pointer"
            onClick={() => setShowDetail(true)}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk2OtBwABZQDCADJyswAAAABJRU5ErkJggg=="
            width={384}
            height={256}
            quality={100}
            priority={true}
            unoptimized={false}
        />
        <p className={`${nameFont.className} ${'my-1'} ${'text-center'} ${'text-lg'}`}>{name}</p>
        {showDetail && (<motion.div
            className="absolute left-0 top-0 z-2 grid h-auto w-full gap-x-12 rounded-2xl bg-gray-200 p-3 text-black md:grid-cols-2 bg-gradient-to-r from-orange-200 to-purple-300"
            initial={{opacity: 0.0, scale: 0.7}}
            animate={{
                scale: [1, 1, 1],
                opacity: [0.0, 0.0, 1],
                y: [310, 0],
            }}
            transition={{type: 'spring', duration: 1}}
        >
            <div>
                <Image
                    src={image_path}
                    alt={name}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUk2OtBwABZQDCADJyswAAAABJRU5ErkJggg=="
                    className="mx-auto rounded-2xl"
                    width={384}
                    height={256}
                    quality={100}
                    priority={true}
                    unoptimized={false}
                />
                <div className="my-2.5 flex justify-center">
                    <Link
                        href={github_url}
                        target="_blank"
                        className="flex items-center space-x-2 p-2 mt-2 rounded-2xl mr-6 text-sm text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 max-[340px]:text-xs max-[340px]:p-0.5 max-[340px]:mr-1.5"
                    >
                        <VscGithubInverted/> <span>Github</span>
                    </Link>
                    <Link
                        href={deployed_url}
                        target="_blank"
                        className="flex items-center space-x-2 p-2 mt-2 rounded-2xl text-sm text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 max-[340px]:text-xs max-[340px]:p-0.5"
                    >
                        <IoLogoVercel/> <span>Deployed</span>
                    </Link>
                </div>
            </div>

            <div>
                <h2 className={`${cardFont.className} ${'mb-3'} ${'text-2xl'} ${'flex-wrap'} ${'font-bold'} ${'max-[350px]:text-xl'}`}>
                    {name}
                </h2>
                <h3
                    dangerouslySetInnerHTML={{__html: description}}
                    className="mb-3"
                ></h3>
                <div className="mt-4 flex flex-wrap text-sm">
                    {key_techs.map((tech) => (<span
                        key={tech}
                        className="mr-4 my-2 p-2 rounded-xl font-bold bg-base-300/5"
                    >
                                    {tech}
                                </span>))}
                </div>
            </div>

            <button
                onClick={() => setShowDetail(false)}
                className="absolute right-1 top-1 rounded-2xl p-1 focus:outline-none"
            >
                <FaWindowClose size={35}/>
            </button>
        </motion.div>)}
    </div>);
};

export default memo(Projectcard);
