/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // turn off strict mode
  reactStrictMode: false,
  transpilePackages: [
    '@ant-design/pro-chat',
    'react-intersection-observer',
    '@ant-design/pro-editor',
  ],
};

export default nextConfig;
