const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: true,
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, "./src/assets/fonts/**/"), 
          to({ context, absoluteFilename }) {
            return "assets/fonts/[name].[ext]";
          }
        },
        { 
          from: path.resolve(__dirname, "./src/assets/images/**/"), 
          to({ context, absoluteFilename }) {
            return "assets/images/[name].[ext]";
          }
        },
      ],
    }),
  ],
};