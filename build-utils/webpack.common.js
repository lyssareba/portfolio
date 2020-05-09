const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  // Common WebPack Configurations
  entry: {
    vendor: ['semantic-ui-react'],
  },
  output: {
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(index.html)$/,
        use: [
          { loader: "file-loader" },
          { loader: "extract-loader" },
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        ]
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Robinson Portfolio',
      template: './public/index.html',
      favicon: 'public/favicon.ico',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
    }),
  ],
};

module.exports = config;