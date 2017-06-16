var webpack = require('webpack');
var path = require('path');
var glob = require("glob");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const getHtmlPlugins = () => {
  var plugins = [];
  var htmlFiles = glob.sync('./src/*.js');
  htmlFiles.forEach(filename => {
    plugins.push(new HtmlWebpackPlugin({
      filename: filename.substring(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.') + 1) + 'html',
      template: filename
    }))
  });

  return plugins;
}

module.exports = [
  {
    devtool: 'inline-eval-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      compress: true,
      historyApiFallback: true
    },
    entry: {
      'index': './src/js/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'babel-preset-es2015',
                'babel-preset-stage-0',
              ],
              plugins: [
                'babel-plugin-transform-runtime',
              ],
            }
          }
        },
        {
          test: /\.hbs$/,
          use: [
            {
              loader: 'handlebars-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          exclude: /(node_modules)/,
          use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin('assets/css/[name].css'),
      ...getHtmlPlugins(),
    ]
  }
];
