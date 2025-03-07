/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Disable `fs` (if that's causing issues)
        path: false, // Disable `path` (if that's causing issues)
      };
  
      return config;
    },
  };
  
  export default nextConfig;
  