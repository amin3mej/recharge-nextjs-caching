/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    logging: {
        fetches: {
            fullUrl: true
        },
    },
    experimental: {
        ppr: true,
    }
}

module.exports = nextConfig
