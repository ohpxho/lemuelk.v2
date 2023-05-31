/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'javascript/auto',
      use: [
        {
          loader: 'json-loader',
        },
      ],
    });
    return config;
  },
  reactStrictMode: true,
}

module.exports = nextConfig
