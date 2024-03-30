/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/about", destination: "/home/pages/about" },
      { source: "/blog", destination: "/home/pages/blog" },
      { source: "/contact", destination: "/home/pages/contact" },
    ];
  },
};

export default nextConfig;
