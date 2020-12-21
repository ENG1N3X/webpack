const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: false,
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      template: "./src/index.html",
    }),
  ],
};