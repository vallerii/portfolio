import type { NextConfig } from "next";

// Case studies removed from the portfolio — send old links to the projects list.
const removed = 'supertrade|notifix|bleakers|derma|adsee|shop2mob';

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: `/:locale(en|uk)/projects/:slug(${removed})`, destination: '/:locale/projects', permanent: true },
      { source: `/projects/:slug(${removed})`, destination: '/en/projects', permanent: true },
      // URLs from before the /en and /uk versions existed
      { source: '/projects', destination: '/en/projects', permanent: true },
      // :slug has no dot so public assets like /projects/oikia.png are not redirected
      { source: '/projects/:slug([^./]+)', destination: '/en/projects/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
