const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  performance: {
    maxEntrypointSize: 200,
    hints: "warning",
  }
}