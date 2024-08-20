/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  // turn off strict mode
  reactStrictMode: false,
  transpilePackages: [
    '@ant-design/pro-chat',
    'react-intersection-observer',
    '@ant-design/pro-editor',
    'shiki',
  ],
};

export default nextConfig;
