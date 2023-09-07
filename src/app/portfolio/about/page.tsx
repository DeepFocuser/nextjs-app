"use client";

import Servicecard from "@/app/portfolio/structure/servicecard";
import {services} from "@/app/portfolio/data";

export default function Home() {
    return <div className="grid gap-4 mt-4 md:grid-cols-2">
        {/* children's initial and animate property should be same as the parent during a stagger effect  */}
        {services.map((service) => (<div
            className="col-span-2 p-5 bg-base-100 rounded-lg md:col-span-1 "
            key={service.title}
        >
            <Servicecard {...service}/>
        </div>))}
    </div>;
}
