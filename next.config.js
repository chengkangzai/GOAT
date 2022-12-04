/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // images: {
    //     unoptimized: true
    // }
    images: {
        loader: "imgix",
        path: "https://noop/",
    }
}

module.exports = nextConfig
