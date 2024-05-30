/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: process.env.API_NAME,
                pathname: "/media/images/**"
            }
        ]
    },
    env: {
        API_URL: process.env.API_URL,
    }
};

export default nextConfig;
