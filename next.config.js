/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};

module.exports = withBundleAnalyzer({
  ...nextConfig,
});
