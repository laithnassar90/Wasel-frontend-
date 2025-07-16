const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config) {
  config.resolve.fallback = {
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    url: require.resolve('url/'),
    querystring: require.resolve('querystring-es3'),
    buffer: require.resolve('buffer/'),
    util: require.resolve('util/'),
    fs: false, // Disable fs as it’s not needed in the browser
  };
  config.plugins = config.plugins || [];
  config.plugins.push(new NodePolyfillPlugin());
  return config;
};