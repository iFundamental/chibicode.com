var path = require('path')
var webpack = require('webpack')
var postcssImport = require('postcss-import')
var postcssCssnext = require('postcss-cssnext')

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: {
    bundle: ['./app.js']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  cssnext: {
    browsers: "last 2 versions",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssCssnext
    ]
  }
}
