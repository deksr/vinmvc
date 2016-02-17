module.exports = {

	context: __dirname,
  entry: "./public/javascripts/entry.js",


  module: {
    loaders: [
      { 
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },


  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }

};