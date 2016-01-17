module.exports = {
  entry: './app/scripts/es6/app.js',

  output: {
    filename: './app/scripts/es5/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/
      }
    ]
  }
};