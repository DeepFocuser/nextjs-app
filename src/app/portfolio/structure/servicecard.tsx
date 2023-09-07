import {Service} from "@/app/portfolio/structure/types";

const Servicecard = ({Icon, title, about}: Service) => {

    return (<div className="flex items-center space-x-4 p-2 ">
        <Icon className="text-green h-12 w-12"/>
        <div className="">
            <h6 className="font-bold">{title}</h6>
            <h6>{about}</h6>
        </div>
    </div>);
};

export default Servicecard;
