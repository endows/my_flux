webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./main.js"]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
