import {siteConfig} from '@/config/site';

export const siteMetadata = {
    metadataBase: new URL('https://deepfocuser.vercel.app'),
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
    themeColor: [{media: '(prefers-color-scheme: light)', color: 'cyan'}],
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images:
            {
                url: siteConfig.ogImageUrl,
                width: 640,
                height: 480,
                alt: siteConfig.name,
            }
    },
    icons: {
        icon: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
};
