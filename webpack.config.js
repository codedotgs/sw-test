const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { // rules for JS
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { // rules for CSS
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      { // rules for Images
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      { // rules for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      cache: false,
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin([
      { from: './src/public/images', to: 'images'},
      { from: './src/public/fonts', to: 'fonts' },
    ]),
  ],
};