module.exports = {
  images: {
    domains: ["api-ecom.lacefeeta.com", "api.lacefeeta.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  typescript: {
    // @TODO: Remove this line in near future after implementing all in typescript
    // Dangerously allow production builds to successfully complete even if your project has type errors.
    ignoreBuildErrors: true,
  },
};
