'use client'
/*
 SWR은 데이터를 가져오고 관리하면서 캐싱 및 자동 재요청 기능을 제공하는 라이브러리
 data : 캐시에서 데이터 반환 -> 서버에 데이터를 가져오는 요청 보냄 -> 최신 데이터 제공 / 동기식
*/
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useSWR from 'swr'
import Loading from "@/components/structure/loading";
import Link from 'next/link';
import {useState} from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {

    const {data, error, isLoading, isValidating, mutate} = useSWR('/api/data', fetcher);
    const [showModal, setShowModal] = useState<boolean>(false)

    if (error) return null;
    if (!data) return <Loading/>;
    if (isLoading) return <Loading/>;

    const codeString = `
    'use client'
    
    import useSWR from 'swr'
    import Loading from "@/components/structure/loading";
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    
    export default function Home() {
    
        const {data, error, isLoading, isValidating, mutate} = useSWR('/api/data', fetcher);
    
        if (error) return null;
        if (!data) return <Loading/>;
        if (isLoading) return <Loading/>;
        
        return (
            <div>
                <p>{data.message}</p>
            </div>);
    }
  `;
    return (<div className="mb-36 mt-7">
        <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
                Example Code
            </h2>
            <button className="mt-7 btn btn-primary btn-sm">
                <Link href="/practice">
                    Back to Help For Develop
                </Link>
            </button>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-2/3 p-4 rounded-lg shadow-lg">
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
        <div className="mt-7 flex justify-center items-center">
            {/*<button className="btn" onClick={() => window.my_modal_1.showModal()}>RUN</button>*/}
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">SWR Result!</h3>
                    <p className="py-4">{data.message}</p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>
        </div>
    </div>);
}
