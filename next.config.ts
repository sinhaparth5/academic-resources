import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: 'x-Owner',
            value: 'Parth Sinha'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
