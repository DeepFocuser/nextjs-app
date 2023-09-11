'use client';

import {Skill} from '@/app/about/structure/types';
import {memo} from "react";

const Bar = ({Icon, name, level}: Skill) => {
    const bar_width = `${level}%`;
    return (
        <div className="dark:bg-dark-300 dark:bg-black-500 my-2 rounded-full bg-gray-300 text-white">
            <div
                className="from-green flex items-center rounded-full bg-gradient-to-r to-blue-500 px-4 py-1"
                style={{
                    width: bar_width,
                }}
            >
                <Icon className="mr-3"/> {name}
            </div>
        </div>
    );
};
export default memo(Bar);
