import {ReactNode} from 'react';
import Sidebar from '@/app/portfolio/structure/sidebar';
import Navbar from '@/app/portfolio/structure/navbar';

export default function Layout({children}: { children: ReactNode }) {
    return (
        <div className="mx-auto mb-36 px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
            <div className="text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h1 className="text-2xl font-bold text-gray-300 sm:text-3xl">
                    DeepFocuser Portfolio
                </h1>
                <p className="mt-1.5 text-sm text-gray-400">
                    🎉 Your efforts will never betray you 🎉
                </p>
            </div>
            <div className="mt-8 grid grid-cols-12 gap-4 px-4">
                {/* // do this div style later (after putting the content) */}
                <div
                    // rounded-xl border border-pink-300 shadow-xl shadow-pink-300/10 transition hover:shadow-pink-300
                    className="col-span-12 rounded-2xl border border-blue-300 p-4 text-center text-base shadow-lg shadow-blue-300 lg:col-span-3"
                >
                    {/* //!sidebar */}
                    <Sidebar/>
                </div>
                <div
                    className="col-span-12 flex flex-col overflow-hidden rounded-2xl border border-blue-300 shadow-lg shadow-blue-300 lg:col-span-9">
                    {/* //!navbar */}
                    <Navbar/>
                    {children}
                    {/* //!portfolio */}
                </div>
            </div>
        </div>
    );
}
