"use client";

import {Wendy_One} from 'next/font/google';

import {Service} from "@/app/portfolio/structure/types";

const titleFont = Wendy_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});


// https://velog.io/@nemo/string-to-jsx - 참고하기
const Servicecard = ({Icon, title, about}: Service) => {

    return (<div className="flex items-center space-x-4">
        <Icon className="text-blue-400 w-12 h-12"/>
        <div>
            <p className={`${titleFont.className} ${'text-xl'}`}>{title}</p>
            <h6 dangerouslySetInnerHTML={{__html: about}} className="mt-1 text-md"></h6>
        </div>
    </div>);
};

export default Servicecard;
