'use client'; // 사실 about/page에서 했으므로 안해도 됨

import { Wendy_One } from 'next/font/google';
import { Service } from '@/app/about/structure/types';

const titleFont = Wendy_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

// https://velog.io/@nemo/string-to-jsx - 참고하기
const Servicecard = ({ Icon, title, about }: Service) => {
    return (
        <div className="box flex items-center space-x-3.5">
            <Icon className="h-12 w-12 text-blue-400" />
            <div>
                <p
                    className={`${
                        titleFont.className
                    } ${'text-xl'} ${`max-[480px]:text-base`}`}
                >
                    {title}
                </p>
                <h6
                    dangerouslySetInnerHTML={{ __html: about }}
                    className="text-md mt-1 max-[480px]:text-xs "
                ></h6>
            </div>
        </div>
    );
};

export default Servicecard;