/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'api.dicebear.com',
            'images.unsplash.com',
        ],
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
