'use client';

import {Wendy_One} from 'next/font/google';

import {Service} from '@/app/portfolio/structure/types';

const titleFont = Wendy_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

// https://velog.io/@nemo/string-to-jsx - 참고하기
const Servicecard = ({Icon, title, about}: Service) => {
    return (
        <div className="flex items-center space-x-2">
            <Icon className="h-12 w-12 text-blue-400"/>
            <div>
                <p className={`${titleFont.className} ${'text-xl'} ${`max-[480px]:text-base`}`}>{title}</p>
                <h6
                    dangerouslySetInnerHTML={{__html: about}}
                    className="text-md max-[480px]:text-xs mt-1 "
                ></h6>
            </div>
        </div>
    );
};

export default Servicecard;
