// Karma configuration

module.exports = function(config) {
  config.set({
    // ... normal karma configuration

    files: [
      // all files ending in "_test"
      'test/*_test.js',
      'test/**/*_test.js'
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      'test/*_test.js': ['webpack'],
      'test/**/*_test.js': ['webpack']
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

    plugins: [
      require("karma-webpack")
    ]

  });
};
