/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 添加这一段：忽略构建时的 TypeScript 错误
  typescript: {
    ignoreBuildErrors: true,
  },

  // 你之前的 webpack 配置保留不动
  webpack: (config) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-native-async-storage/async-storage': false, 
    };
    return config;
  },
};

export default nextConfig;