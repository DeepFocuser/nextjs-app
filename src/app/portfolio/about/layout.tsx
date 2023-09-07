import {ReactNode} from "react";
// http://www.tcpschool.com/html-tags/intro
export default function Layout({children}: { children: ReactNode }) {
    return (<div className="flex flex-col flex-grow px-6 pt-1 ">
        <h6 className="mt-3 text-base font-medium mb-3">
            I am Kim Jong-gon, who is developing hard every day based on the idea that people who stick their butt for a
            long time are good.
            I have about 6 years of experience in <span
            className="font-bold text-error">AI Research / Development</span> and I am a <span
            className="font-bold text-success">FrontEnd developer</span> with 1+ year of experience.
            <span className="font-bold text-warning"> I work hard and do well no matter what I do.</span>
        </h6>
        <div
            className="flex-grow mt-4 py-5 px-4 -mr-6 -ml-6 bg-base-300"
        >
            <h4 className="text-xl font-bold tracking-wide">
                What I can do
            </h4>
            {children}
        </div>
    </div>);
}
