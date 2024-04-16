const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    dropdown: './dropdown.js',
    slider: './slider.js',
  },

  devtool: 'inline-source-map',
  
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dynamic UI Elements',
    }),
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
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