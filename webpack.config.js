module.exports = {
    entry:  './src/index.js',
    output: {
      filename: 'main.js',
      path: __dirname + '/dist',
      },
    module: {
        rules: [
          { test: /\.js$/, loader: "babel-loader" },
          { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
      }
  };