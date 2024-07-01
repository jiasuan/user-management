/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVER_ENDPOINT: "https://jsonplaceholder.typicode.com"
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/users',
            permanent: true,
          },
        ]
    },
};

export default nextConfig;
