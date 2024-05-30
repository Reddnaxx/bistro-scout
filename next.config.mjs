/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.API_IMAGE_NAME,
                port: '',
            }
        ]
    },
    env: {
        API_URL: process.env.API_URL,
        API_IMAGE_NAME: process.env.API_IMAGE_NAME,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    }
};

export default nextConfig;
