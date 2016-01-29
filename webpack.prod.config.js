var webpack = require('webpack');
var config = require('./webpack.config');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJSPlugin({
    compress: {
      warnings: false
    }
  })
)

config.module.loaders.push(config.shared.getJSLoader('prod'));
config.module.loaders.push(config.shared.getSassLoader('prod'));
module.exports = config;
