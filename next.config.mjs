/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "jxdujzgweuaphpgoowhu.supabase.co",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        pathname: "**"
      },
    ],
  },
};

export default nextConfig;
