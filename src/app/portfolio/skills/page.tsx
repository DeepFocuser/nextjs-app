'use client';

import Servicecard from '@/app/portfolio/structure/servicecard';
import {services} from '@/app/portfolio/data';
import {Service} from '@/app/portfolio/structure/types';
import {motion} from "framer-motion";

export default function Home() {
    return (<div className="mt-1">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service: Service, index) => (<motion.div
            className="mb-1.5 mt-3 rounded-lg bg-base-100 p-1.5"
            key={service.title}
            initial={{opacity: 0.1, scale: 0.95}}
            animate={{
                opacity: [0.1, 0.5, 1],
                scale: [1, 1.03, 1],
                rotate: [0, 90 + index * 30, 0],
                borderRadius: ["7%", "21%", "7%"],
            }}
            transition={{duration: Math.min(index / 5 + 0.1, 1)}}
        >
            <Servicecard {...service} />
        </motion.div>))}
    </div>);
}
