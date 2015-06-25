webpack = require('webpack')
module.exports = {
  entry: {
    app: ["./main.js"]
  },
  output: {
    path: __dirname,
    publicPath: __dirname,
    filename: 'bundle.js'
  },
  plugins: []
};
