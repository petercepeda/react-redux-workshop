var webpack = require('webpack');
var config = require('./webpack.config');

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      "NODE_ENV": JSON.stringify('development')
    }
  })
);

config.module.loaders.push(config.shared.getJSLoader());
config.module.loaders.push(config.shared.getSassLoader());
module.exports = config;
