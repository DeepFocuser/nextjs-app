import { siteConfig } from '@/config/site';

export const siteMetadata = {
    title: 'Next.js First App',
    description: siteConfig.description,
    keywords: [],
    authors: [
        {
            name: 'DeepFocuser',
            url: 'https://github.com/DeepFocuser',
        },
    ],
    creator: 'DeepFocuser',
    themeColor: [{ media: '(prefers-color-scheme: light)', color: 'cyan' }],
    // openGraph: {
    //     type: 'website',
    //     locale: 'ko_KR',
    //     url: siteConfig.url,
    //     title: siteConfig.name,
    //     description: siteConfig.description,
    //     siteName: siteConfig.name,
    //     images: [
    //         {
    //             url: siteConfig.ogImageUrl,
    //             width: 1200,
    //             height: 630,
    //             alt: siteConfig.name,
    //         },
    //     ],
    // },
    // twitter: {
    //     card: 'summary_large_image',
    //     title: siteConfig.name,
    //     description: siteConfig.description,
    //     images: [siteConfig.ogImageUrl],
    //     // creator: '@DeepFocuser',
    // },
    icons: {
        icon: '/favicon.ico',
        // shortcut: '/images/favicon-32x32.png',
        // apple: '/images/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};
