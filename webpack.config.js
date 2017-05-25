var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var _externals = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    _externals[mod] = 'commonjs ' + mod;
  });

module.exports = function(env) {
  var production = (`${env.production}` == "true")

  return {
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
    externals: _externals,
    plugins: production
      ? []
      : [new webpack.BannerPlugin({ 
          banner: 'require("source-map-support").install();', 
          raw: true, 
          entryOnly: false 
    })],
    devtool: production ? '' : 'sourcemap'
  }
}
