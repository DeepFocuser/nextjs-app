"use client";

import Servicecard from "@/app/portfolio/structure/servicecard";
import {services} from "@/app/portfolio/data";
import {Service} from "@/app/portfolio/structure/types";

export default function Home() {
    return <div className="mt-1">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service: Service) => (<div
            className="mt-3 mb-1.5 p-1.5 bg-base-100 rounded-lg"
            key={service.title}
        >
            <Servicecard {...service}/>
        </div>))}
    </div>;
}
