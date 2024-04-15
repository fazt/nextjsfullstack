/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "tailwindui.com",
      },
      {
        hostname: 'images.unsplash.com'
      }
    ],
  },
};

export default nextConfig;
