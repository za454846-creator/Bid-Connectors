/** @type {import('next').NextConfig} */
const nextConfig = {
  // cPanel / shared hosting: the whole site is exported as static HTML (out/ folder)
  output: "export",

  // URLs have no trailing slash (/about, /ar/about), same as the old URLs
  trailingSlash: false,

  // No Next image server in static export; images are already .webp
  images: { unoptimized: true },

  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
};

export default nextConfig;
