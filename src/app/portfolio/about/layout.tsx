import Servicecard from "@/app/portfolio/structure/servicecard";
import {services} from "../data";

export default function Layout() {
    return (<div className="flex flex-col flex-grow px-6 pt-1 ">
        <h6 className="text-base font-medium">
            I am currently pursuing master. I have 5+ years of experience in
            AI Research / Development and I am a FrontEnd developer with 1+ year of experience
        </h6>
        <div
            className="flex-grow p-4 -mr-6 -ml-6"
        >
            <h4 className="text-xl tracking-wide">
                What I can do
            </h4>

            <div className="grid gap-6 my-3 md:grid-cols-2">
                {/* children's initial and animate property should be same as the parent during a stagger effect  */}
                {services.map((service) => (<div
                    className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                    key={service.title}
                >
                    <Servicecard {...service}/>
                </div>))}
            </div>
        </div>
    </div>);
}
