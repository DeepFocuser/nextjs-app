'use client';

import {Roboto_Condensed} from 'next/font/google';
import {memo} from 'react';
import Languagebar from '../structure/languagesbar';
import Toolbar from '../structure/toolbar';
import {languages, tools} from '../data';
import {motion} from 'framer-motion';

const thesisFont = Roboto_Condensed({
    weight: ['700'], subsets: ['latin'], // style: ['italic'],
    display: 'swap',
});

function Home() {
    return (<>
        <div className="grid gap-6 px-4 md:grid-cols-2">
            <div>
                <h5 className="mb-1 mt-1 text-2xl font-bold">Education</h5>
                <motion.div
                    initial={{opacity: 0.0, scale: 0.7}}
                    animate={{
                        scale: [1, 1, 1], opacity: [0.0, 0.0, 1], y: [3, 0],
                    }}
                    transition={{type: 'spring', duration: 1}}
                >
                    <p className="text-md ml-1 mt-2">
                        🔵 2010 ~ 2016 / 👨‍🎓 a bachelor of
                        Robotics(Intelligent system control) at{' '}
                        <span className="font-bold text-warning">
                                Kwangwoon University
                            </span>
                    </p>
                    <p
                        className={`${thesisFont.className} ${'my-1'} ${'text-md'} ${'font-bold'}`}
                    >
                        &nbsp;&nbsp;a bachelor&apos;s thesis : Development
                        of a realistic telepresence system using a first
                        person view (FPV) drone
                    </p>
                    <p className="text-md ml-1 mt-3">
                        🔵 2016 ~ 2018 / 👨‍🎓 a master of Robotics(Machine
                        Learning) at{' '}
                        <span className="font-bold text-warning">
                                Kwangwoon University
                            </span>
                    </p>
                    <p
                        className={`${thesisFont.className} ${'my-1'} ${'text-md'} ${'font-bold'}`}
                    >
                        &nbsp;&nbsp;a master&apos;s thesis : Recurrent
                        neural network-based motion prediction
                    </p>
                </motion.div>
            </div>
            <div>
                <h5 className="mb-1 mt-1 text-2xl font-bold">Experience</h5>
                <motion.div
                    initial={{opacity: 0.0, scale: 0.7}}
                    animate={{
                        scale: [1, 1, 1], opacity: [0.0, 0.0, 1], y: [6, 0],
                    }}
                    transition={{type: 'spring', duration: 1.5}}
                >
                    <div className="my-1">
                            <span
                                className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-lg font-bold text-transparent">
                                &nbsp;AI
                            </span>
                        <span className="text-lg font-bold">&nbsp;/&nbsp;</span>
                        <span
                            className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-lg font-bold text-transparent">
                                Web Developer
                            </span>
                    </div>
                    <div>
                        <table className="divide-y text-sm max-[319px]:text-xs">
                            <thead>
                            <tr>
                                <th className="py-2">Company</th>
                                <th className="py-2">Period</th>
                                <th className="py-2">Role</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y">
                            <tr className="text-left">
                                <td className="py-1.5 text-emerald-400 text-left">
                                    Koyoung Technology
                                </td>
                                <td className="px-2 py-1.5">
                                    2018.01 ~ 2019.03
                                </td>
                                <td className="py-1.5 text-center">
                                    AI Developer
                                </td>
                            </tr>

                            <tr className="text-left">
                                <td className="py-1.5 text-cyan-400">
                                    Alchera
                                </td>
                                <td className="px-2 py-1.5">
                                    2019.04 ~ 2020.09
                                </td>
                                <td className="py-1.5 text-center">
                                    AI Developer
                                </td>
                            </tr>

                            <tr className="text-left">
                                <td className="py-1.5 text-sky-400">
                                    Hyundai Autoever
                                </td>
                                <td className="px-2 py-1.5">
                                    2020.10 ~ 2022.06
                                </td>
                                <td className="py-1.5 text-center">
                                    AI Developer
                                </td>
                            </tr>
                            <tr className="text-left">
                                <td className="py-1.5 text-rose-400">
                                    Com2verse
                                </td>
                                <td className="px-2 py-1.5">
                                    2022.06 ~ now
                                </td>
                                <td className="py-1.5 text-center">
                                            <span
                                                className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-bold">
                                                AI
                                            </span>
                                    <span className="font-bold">
                                                &nbsp;/&nbsp;
                                            </span>
                                    <span
                                        className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent font-bold">
                                                Web Developer
                                            </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
        <div
            className="grid gap-6 px-4 max-[1535px]:mb-12 max-[1535px]:py-0.5 max-[1535px]:pb-4 max-[1279px]:m-3 md:grid-cols-2">
            <div>
                <h5 className="mt-3 text-2xl font-bold">Language</h5>
                <motion.div
                    className="ml-1 mt-2"
                    initial={{opacity: 0.0, scale: 0.7}}
                    animate={{
                        scale: [1, 1, 1], opacity: [0.0, 0.0, 1], y: [9, 0],
                    }}
                    transition={{type: 'spring', duration: 2}}
                >
                    {languages.map((language, index) => (<Languagebar {...language} key={index}/>))}
                </motion.div>
            </div>

            <div>
                <h5 className="mt-3 text-2xl font-bold">
                    Library & Framework
                </h5>
                <motion.div
                    className="ml-1 mt-2"
                    initial={{opacity: 0.0, scale: 0.7}}
                    animate={{
                        scale: [1, 1, 1], opacity: [0.0, 0.0, 1], y: [12, 0],
                    }}
                    transition={{type: 'spring', duration: 2.5}}
                >
                    {tools.map((tool, index) => (<Toolbar {...tool} key={index}/>))}
                </motion.div>
            </div>
        </div>
    </>);
}

export default memo(Home);
