import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: '@use "styles/utils" as *;',
  },
  images: {
    domains: ['images.tedooo.com'],
  },
};

export default nextConfig;
