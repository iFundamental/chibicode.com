var webpack = require("webpack");

module.exports = {
  context: __dirname + '/_assets',
  entry: './app.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/assets',
    publicPath: 'http://localhost:8080/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!cssnext-loader'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader'
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
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}
