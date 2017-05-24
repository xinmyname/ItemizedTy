var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/main.ts',
  target: 'node',
  output: {
    path: path.join(__dirname, 'bin'),
    filename: 'itemize.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders:[
        { test: /.ts$/, loader: 'awesome-typescript-loader' }
    ]
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin({ 
        banner: 'require("source-map-support").install();', 
        raw: true, 
        entryOnly: false 
    })],
  devtool: 'sourcemap'
}