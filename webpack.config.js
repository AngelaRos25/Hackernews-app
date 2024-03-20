const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HackerNews',
      template: './src/html/index.html',
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/img/favicon.png'),
      prefix: '',
      publicPath: '../favicons',
      outputPath: path.resolve(__dirname, 'dist/favicons'),
      inject: (htmlPlugin) => 
        path.basename(htmlPlugin.options.filename) === 'index.html',
    }),
  ],
  devServer: {
    port: 5000,
    open: true,
    static: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};