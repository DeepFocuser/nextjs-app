'use client';

import Servicecard from '@/app/portfolio/structure/servicecard';
import { services } from '@/app/portfolio/data';
import { Service } from '@/app/portfolio/structure/types';

export default function Home() {
    return (
        <div className="mt-1">
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service: Service) => (
                <div
                    className="mb-1.5 mt-3 rounded-lg bg-base-100 p-1.5"
                    key={service.title}
                >
                    <Servicecard {...service} />
                </div>
            ))}
        </div>
    );
}
