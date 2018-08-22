module.exports = {
    entry:  './src/index.js',
    output: {
      filename: 'main.js',
      path: __dirname + '/dist',
      },
    module: {
        rules: [
          { test: /\.html$/, loader: "file-loader", options: { name: '[name].[ext]' } },
          { test: /\.json$/, options: { name: '[name].[ext]' }, loader: "file-loader", type: "javascript/auto" },
          { test: /server.js/, loader: "file-loader", options: { name: '[name].[ext]' } },
          { test: /\.js$/, loader: "babel-loader" },
          { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
      }
  };