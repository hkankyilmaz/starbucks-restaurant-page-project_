const path = require('path');

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    //clean: true,

  },
  devtool: 'inline-source-map',

  //loaders
  module: {
    rules: [
      {test: /\.css$/i, use: ['style-loader', 'css-loader']},
      {test: /\.(svg|ico|jpg|jpeg|png|gif|webp)$/i, type:'asset/resource'},
      {test: /\.(woff|woff2|eot|ttf|otf)$/i, type:'asset/resource'},
      {test: /\.(mov|mp4)$/, use: [{ loader: 'file-loader', options: {name: '[name].[ext]'}}]},
    ],
  },

  //plugins
  
}

