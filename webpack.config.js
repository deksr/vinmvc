var webpack = require('webpack-stream');

// var PROD = JSON.parse(process.env.PROD_ENV || '0'); if this run `PROD_ENV=1 webpack` for minfiying or with below just run webpack 

var PROD = (process.env.NODE_ENV === 'production')

module.exports = {

	context: __dirname,
  entry: "./public/javascripts/entry.js",


  module: {
    loaders: [
      { 
        // test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
          // plugins: ['react-html-attrs']
        }
      }
    ],
  },


  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  plugins: PROD ? [
    // new webpack.optimize.UglifyJsPlugin({minimize: true}) or below
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ] : []


};