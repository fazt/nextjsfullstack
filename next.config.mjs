/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "tailwindui.com",
      },
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'store.sony.com.co'
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
