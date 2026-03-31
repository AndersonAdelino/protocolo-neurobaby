import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://cdn.utmify.com.br https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br",
              "style-src 'self' 'unsafe-inline' https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "media-src 'self' blob: https://b-vz-e8b8ffdd-f5d.tv.pandavideo.com.br https://*.pandavideo.com.br https://*.tv.pandavideo.com.br",
              "frame-src 'self' https://player-vz-e8b8ffdd-f5d.tv.pandavideo.com.br https://*.pandavideo.com.br",
              "connect-src 'self' https: wss: blob:",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
