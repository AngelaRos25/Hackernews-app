const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/i,
      use: ['style-loader', 'css-loader']},
      { test: /\.png$/, type: "asset/resource" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HackerNews',
      template: './src/html/index.html',
      favicon: './src/img/favicon.png'
    }),
  ],
  devServer: {
    port: 5000,
    open: true,
    static: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};