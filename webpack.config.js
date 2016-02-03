var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var WebpackNotifierPlugin = require('webpack-notifier')
var autoprefixer = require('autoprefixer')


var jsLoader = {
  test: /\.js$/,
  loaders: ['babel'],
  include: [path.resolve(__dirname, 'app')]
}

var jsonLoader = {
  test: /\.json$/,
  loader: 'json'
}


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    'babel-polyfill', // Set up an ES6-ish environment
    path.resolve(__dirname, 'app', 'main.js')
  ],
  output: {
    path: './public',
    filename: '[name].js'
  },
  module: {
    loaders: [jsonLoader]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
    new WebpackNotifierPlugin({ title: 'Webpack assets' })
  ],
  postcss: function () {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ]
  },
  resolve: {
    root: [path.join(__dirname, 'app')],
    extensions: ['', '.js', '.sass', '.json', '.woff', '.ttf', '.eot', '.svg']
  },
  shared: {
    getJSLoader: function (env) {
      if (!env === 'prod')
        jsLoader.loaders.unshift('react-hot');
      return jsLoader;
    },
    getSassLoader: function (env) {
      var localIdentName = '[path][name]';

      if (env !== 'prod')
        localIdentName += '___[local]___[hash:base64:5]'

      return {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=2&localIdentName=' + localIdentName + '!postcss!sass?indentedSyntax')
      };
    }
  }
};
