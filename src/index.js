module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  return {
    ...nextConfig,
    webpack(config, options) {
      config.module.rules.push({
        test: /\.md$/,
        issuer: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: require.resolve('@stefanprobst/markdown-loader'),
            options: pluginOptions,
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  }
}
