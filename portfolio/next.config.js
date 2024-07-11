/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add raw-loader for handling glsl files
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader'],
    });

    return config;
  },
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;

