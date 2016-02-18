var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
