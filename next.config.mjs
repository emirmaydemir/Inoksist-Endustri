/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protokol
        hostname: "res.cloudinary.com", // Cloudinary alan adı
        port: "", // Port yoksa boş bırakabilirsiniz
        pathname: "/**", // Tüm yollar için geçerli
      },
    ],
  },
};

export default nextConfig;
