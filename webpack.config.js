const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    proxy: {
      '/': 'http://localhost:3030'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        // /\.(scss|css)$/i    /\.scss$/  /\.s[ac]ss$/i
        test: /\.(scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  mode: process.env.NODE_ENV,
  performance: {
    hints: false
  }

};