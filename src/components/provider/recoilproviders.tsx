'use client';
//https://nextjs.org/docs/getting-started/react-essentials
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

type Props = {
    children: ReactNode;
};

export default function RecoilProviders({ children }: Props) {
    return <RecoilRoot>{children}</RecoilRoot>;
}
