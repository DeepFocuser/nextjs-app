'use client';
import Servicecard from '@/app/about/structure/servicecard';
import { services } from '@/app/about/data';
import { Service } from '@/app/about/structure/types';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="flex flex-grow flex-col px-4">
            <motion.div
                className="mb-3 mt-2 text-base font-medium"
                // initial={{opacity: 0, scale: 0.7}}
                // animate={{opacity: 1, scale: 1}}
                // transition={{duration: 0.821}}
                initial={{ opacity: 0.1, scale: 0.95 }}
                animate={{
                    opacity: [0.1, 0.5, 1],
                    scale: [1, 1.03, 1],
                    rotate: [0, 121, 71, 0],
                }}
                transition={{
                    duration: 0.721,
                }}
            >
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
            </motion.div>
            <div className="-ml-4 -mr-4 flex flex-grow flex-col bg-base-300 px-4 py-2.5">
                <div className="text-lg font-bold tracking-wide">
                    <span className="border-b-4 border-gray-400">
                        What I can do
                    </span>
                </div>
                <div className="mt-1">
                    {/* children's initial and animate property should be same as the parent during a stagger effect  */}
                    {services.map((service: Service, index) => (
                        <motion.div
                            className="mb-1.5 mt-3 rounded-lg bg-base-100 p-1.5"
                            key={service.title}
                            initial={{ opacity: 0.1, scale: 0.95 }}
                            animate={{
                                opacity: [0.1, 0.5, 1],
                                scale: [1, 1.03, 1],
                                rotate: [0, 90 + index * 30, 0],
                                borderRadius: ['7%', '21%', '7%'],
                            }}
                            transition={{
                                duration: Math.min(index / 5 + 0.1, 1),
                            }}
                        >
                            <Servicecard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
