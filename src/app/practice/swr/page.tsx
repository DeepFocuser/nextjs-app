'use client';
/*
 SWR은 데이터를 가져오고 관리하면서 캐싱 및 자동 재요청 기능을 제공하는 라이브러리
 data : 캐시에서 데이터 반환 -> 서버에 데이터를 가져오는 요청 보냄 -> 최신 데이터 제공 / 동기식
*/
import SyntaxHighlighter from 'react-syntax-highlighter';
import {ocean} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import useSWR from 'swr';
import Loading from '@/components/structure/loading';
import Link from 'next/link';
import {useRef} from 'react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
    const {data, error, isLoading, isValidating, mutate} = useSWR(
        '/api/data',
        fetcher,
    );
    const modalRef = useRef<any>();

    if (error) return null;
    if (!data) return <Loading/>;
    if (isLoading) return <Loading/>;

    const codeString = `
    'use client'
    import useSWR from 'swr'
    import Loading from "@/components/structure/loading";
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    
    export default function Home() {
    
        const {data, error, isLoading, isValidating, mutate} = useSWR(
            '/api/data', fetcher);
    
        if (error) return null;
        if (!data) return <Loading/>;
        if (isLoading) return <Loading/>;
        
        return (
            <div>
                <p>{data.message}</p>
            </div>);
    }`;
    return (
        <div className="mb-36 mt-8">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">
                    SWR Example Code
                </h2>
                <Link href="/practice" className="btn-primary btn-sm btn mt-7">
                    Back to Help For Develop
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-2/3 rounded-lg p-4 shadow-lg">
                    <SyntaxHighlighter language="javascript" style={ocean} showLineNumbers={true}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className="mt-7 flex items-center justify-center">
                <button
                    className="btn-info btn"
                    onClick={() => modalRef.current.showModal()}
                >
                    RUN
                </button>
                <dialog
                    ref={modalRef}
                    className="modal modal-bottom sm:modal-middle"
                >
                    <form method="dialog" className="modal-box">
                        <h3 className="text-lg font-bold">SWR Result!</h3>
                        <p className="py-4">{data.message}</p>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </div>
    );
}
