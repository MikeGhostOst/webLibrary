// const path = require('path');

module.exports = {
    entry:  './src',
    output: {
      filename: 'main.js',
      path: __dirname + '\dist',
      // path: 'build',
      // filename: 'bundle.js',
      },
    module: {
      rules: [
        {
          test: /\.js/,
          loader: 'babel',
          include: __dirname + '/src',
        },
        {
          test: /\.css/,
          loaders: ['style', 'css'],
          include: __dirname + '/src',
        }
      ],
    }
  };