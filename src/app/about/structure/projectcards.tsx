'use client';

import { motion } from 'framer-motion';
import Projectcard from '@/app/about/structure/projectcard';
import { memo } from 'react';
import { IProject } from '@/app/about/structure/types';

// 완전한 client Side Rendering을 위해서 아래와 같이..따로 뻈다.
const Projectcards = ({ contents }: { contents: Array<IProject> }) => {
    return (
        <div className="relative mt-2 grid grid-cols-12 gap-5">
            {contents.map((project, index) => (
                <motion.div
                    className="col-span-12 rounded-2xl border bg-base-300 bg-gradient-to-r from-blue-400 to-purple-400 p-1 max-[1279px]:my-0.5 max-[319px]:w-[11rem] sm:col-span-8 md:col-span-6 lg:col-span-4"
                    key={index}
                    initial={{ opacity: 0.0, scale: 0.7 }}
                    animate={{
                        scale: [1, 1, 1],
                        opacity: [0.0, 0.0, 1],
                        y: [21 + index, 0],
                    }}
                    transition={{
                        type: 'spring',
                        duration: 0.5 + index / contents.length,
                    }}
                >
                    <Projectcard {...project} />
                </motion.div>
            ))}
        </div>
    );
};
export default memo(Projectcards);
