/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — exports to an `out/` folder that can be hosted
  // anywhere (Netlify Drop, Vercel, GitHub Pages, any static host).
  output: "export",
  images: {
    // Required for static export (no server to optimize images at runtime).
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
