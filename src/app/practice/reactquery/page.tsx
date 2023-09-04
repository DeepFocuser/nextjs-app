'use client';
/*
비동기
https://hoon1994.tistory.com/80
*/
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Loading from '@/components/structure/loading';
import Link from 'next/link';
import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['sample'],
        queryFn: () => fetcher('/api/data'),
    });
    const modalRef = useRef<any>();

    if (isError) return null;
    if (!data) return <Loading />;
    if (isLoading) return <Loading />;

    const codeString = `    'use client'
    import useSWR from 'swr'
    import Loading from "@/components/structure/loading";
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    
    export default function Home() {
    
        const {isLoading, isError, data, error} = useQuery({
            queryKey: ['data'], queryFn: () => fetcher('/api/data'),
        });
    
        if (isError) return null;
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
                    ReactQuery Example Code
                </h2>
                <Link href="/practice" className="btn-primary btn-sm btn mt-7">
                    Back to Help For Develop
                </Link>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-2/3 rounded-lg p-4 shadow-lg">
                    <SyntaxHighlighter
                        language="javascript"
                        style={ocean}
                        showLineNumbers={true}
                    >
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
                        <h3 className="text-lg font-bold">
                            ReactQuery Result!
                        </h3>
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
