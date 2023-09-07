import {Service} from "@/app/portfolio/structure/types";

// https://velog.io/@nemo/string-to-jsx - 참고하기
const Servicecard = ({Icon, title, about}: Service) => {

    return (<div className="flex items-center space-x-4 p-1 ">
        <Icon className="text-blue-400 w-20 h-20"/>
        <div>
            <h6 className="font-bold">{title}</h6>
            <h6 className="mt-1">{about}</h6>
        </div>
    </div>);
};

export default Servicecard;
