const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    dropdown: './src/dropdown.js',
    slider: './src/slider.js',
  },

  devtool: 'inline-source-map',
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Dynamic UI Elements',
    }),
  ],

  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};