/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.renzdearroz.com" }],
        destination: "https://renzdearroz.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
