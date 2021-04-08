const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: true,
        },
      }],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/, // don't test node_modules folder
      use: {
        loader: 'babel-loader',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My cool app',
      template: './src/index.html',
      minify: false,
    }),
    new CleanWebpackPlugin({
      verbose: true,
    }),
  ],
};
