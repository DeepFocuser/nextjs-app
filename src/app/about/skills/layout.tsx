import {ReactNode} from "react";

export default function Layout({children}: { children: ReactNode }) {
    return (<div className="flex flex-grow flex-col px-4">
            {children}
        </div>);
}
