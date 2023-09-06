'use client';

import { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { IProject } from './types';

import Image from 'next/image';

const Projectcard: FunctionComponent<{
    project: IProject;
}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
    },
}) => {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
            <Image
                src={image_path}
                alt={name}
                className="cursor-pointer"
                onClick={() => setShowDetail(true)}
                layout="responsive"
                height="150"
                width="300"
            />
            {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
            <p className="my-2 text-center">{name}</p>

            {showDetail && (
                <div className="dark:bg-dark-100 absolute left-0 top-0 z-10 grid h-auto w-full gap-x-12 bg-gray-100 p-2 text-black dark:text-white md:grid-cols-2">
                    <div>
                        {/* <img src={image_path} alt={name} /> */}

                        <Image
                            src={image_path}
                            alt={name}
                            layout="responsive"
                            height="150"
                            width="300"
                        />
                        <div className="my-4 flex justify-center space-x-3">
                            <a
                                href={github_url}
                                className="dark:bg-dark-200 flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg"
                            >
                                <AiFillGithub /> <span>Github</span>
                            </a>
                            <a
                                href={deployed_url}
                                className="dark:bg-dark-200 flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg"
                            >
                                <AiFillProject /> <span>Project</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-3 text-xl font-medium md:text-2xl">
                            {name}
                        </h2>
                        <h3 className="mb-3 font-medium">{description}</h3>

                        <div className="mt-5 flex flex-wrap space-x-2 text-sm tracking-wider">
                            {key_techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="dark:bg-dark-200 rounde-sm my-1 bg-gray-200 px-2 py-1"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => setShowDetail(false)}
                        className="dark:bg-dark-200 absolute right-3 top-3 rounded-full bg-gray-200 p-1 focus:outline-none"
                    >
                        <MdClose size={30} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projectcard;
