import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL + '/:path*',
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, '../../libs/style/lib/scss/variables')],
    additionalData: `@use "./colors-defs" as *;`,
  },
};

export default nextConfig;
