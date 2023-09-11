'use client';

import {Roboto_Condensed} from "next/font/google";
import {memo} from "react";

const thesisFont = Roboto_Condensed({
    weight: ['700'],
    subsets: ['latin'],
    // style: ['italic'],
    display: 'swap',
});

function Home() {
    return (
        <div className="grid gap-6 md:grid-cols-2 px-4">
            <div>
                <h5 className="mb-1 mt-1 text-xl font-bold">Education</h5>
                <p className="mt-2 text-sm"> 🔵 period : 2010 ~ 2016 / a bachelor of Robotics(Intelligent system
                    control)
                    at <span className="font-bold text-warning">Kwangwoon University</span></p>
                <p className={`${thesisFont.className} ${'my-1'} ${'text-sm'} ${'font-bold'}`}>
                    &nbsp;&nbsp;a bachelor&apos;s thesis : Development of a realistic telepresence system using a first
                    person view (FPV)
                    drone
                </p>
                <p className="mt-3 text-sm"> 🔵 period : 2016 ~ 2018 / a master of Robotics(Machine Learning) at <span
                    className="font-bold text-warning">Kwangwoon University</span></p>
                <p className={`${thesisFont.className} ${'my-1'} ${'text-sm'} ${'font-bold'}`}>
                    &nbsp;&nbsp;a master&apos;s thesis : Recurrent neural network-based motion prediction
                </p>
            </div>
            <div>
                <h5 className="mb-1 mt-1 text-xl font-bold">Experience</h5>
                <div className="my-1">
                <span
                    className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-md font-bold text-transparent">
                    AI
                </span>
                    <span className="text-md">&nbsp;/&nbsp;</span>
                    <span
                        className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-md font-bold text-transparent">
                    Web Developer
                </span>
                </div>
                <div>
                    <table className="divide-y-2 text-xs">
                        <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="px-2 py-2">
                                Company
                            </th>
                            <th className="px-2 py-2">
                                Period
                            </th>
                            <th className="px-2 py-2">
                                Role
                            </th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-2 py-1.5">
                                Koyoung Technology
                            </td>
                            <td className="px-2 py-1.5">24/05/1995</td>
                            <td className="px-2 py-1.5">AI Researcher / Developer</td>
                        </tr>

                        <tr>
                            <td className="px-2 py-1.5">
                                Alchera
                            </td>
                            <td className="px-2 py-1.5">04/11/1980</td>
                            <td className="px-2 py-1.5">AI Researcher / Developer</td>
                        </tr>

                        <tr>
                            <td className="px-2 py-1.5">
                                Hyundai Autoever
                            </td>
                            <td className="px-2 py-1.5">24/05/1995</td>
                            <td className="px-2 py-1.5">AI Researcher / Developer</td>
                        </tr>
                        <tr>
                            <td className="px-2 py-1.5">
                                Com2verse
                            </td>
                            <td className="px-2 py-1.5">24/05/1995</td>
                            <td className="px-2 py-1.5">AI Researcher / Developer</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>);
}

{/*Languages & Tools */
}
{/*<div className="grid gap-9 md:grid-cols-2">*/
}
{/*    <div>*/
}
{/*        <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>*/
}
{/*        <div className="my-2">*/
}
{/*            /!*{languages.map((language, i) => (*!/*/
}
{/*            /!*    <Bar value={language} key={i}/>*!/*/
}
{/*            /!*))}*!/*/
}
{/*        </div>*/
}
{/*    </div>*/
}

{/*    <div>*/
}
{/*        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>*/
}
{/*        <div className="my-2">*/
}
{/*            {tools.map((tool, i) => (*/
}
{/*                <Bar value={tool} key={i}/>*/
}
{/*            ))}*/
}
{/*        </div>*/
}
{/*    </div>*/
}
{/*</div>*/
}

export default memo(Home);

