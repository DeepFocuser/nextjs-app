import { ReactNode } from 'react';
// http://www.tcpschool.com/html-tags/intro
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-grow flex-col px-4 ">
            <div className="mb-3 mt-2 text-base font-medium">
                I am Kim Jong Gon, who is developing hard every day based on the
                idea that people who stick their butt for a long time are good.
                I have about 6 years of experience in{' '}
                <span className="font-bold text-error">
                    AI Research / Development
                </span>{' '}
                and I am a{' '}
                <span className="font-bold text-success">
                    FrontEnd developer
                </span>{' '}
                with 1+ year of experience.
                <span className="font-bold text-warning">
                    {' '}
                    I work hard and do well no matter what I do.
                </span>
            </div>
            <div className="-ml-4 -mr-4 flex flex-grow flex-col bg-base-300 px-4 py-2.5">
                <div className="text-lg font-bold tracking-wide">
                    <span className="border-b-4 border-gray-400">
                        What I can do
                    </span>
                </div>
                {children}
            </div>
        </div>
    );
}
