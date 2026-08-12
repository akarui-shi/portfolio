/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js build — on Vercel this enables automatic image
  // optimization (the hero is served as a small webp/avif instead of a
  // multi-MB PNG). No server code is used, so pages still prerender static.
  images: {
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
