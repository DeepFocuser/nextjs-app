'use client';

import { FunctionComponent } from 'react';
import { Service } from './types';
// import { motion } from 'framer-motion'

const Servicecard: FunctionComponent<{ service: Service }> = ({
    service: { Icon, title, about },
}) => {
    //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
    function createMarkup() {
        return {
            __html: about,
        };
    }

    return (
        <div className="flex items-center space-x-4 p-2 ">
            <Icon className="text-green h-12 w-12" />
            <div className="">
                <h6 className="font-bold">{title}</h6>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    );
};

export default Servicecard;
