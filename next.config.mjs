/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "booking-restaurants-v3va.vercel.app",
                pathname: "/media/images/**"
            }
        ]
    },
    env: {
        API_URL: process.env.API_URL,
        API_NAME: process.env.API_NAME,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_URL_INTERNAL: process.env.NEXTAUTH_URL_INTERNAL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    }
};

export default nextConfig;
