var webpack = require('webpack');
var path = require('path');
var glob = require("glob");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
    entry: {
      'index': './src/js/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].min.js'
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
                'babel-preset-react',
                'babel-preset-stage-0',
              ],
              plugins: [
                'babel-plugin-transform-runtime',
              ],
            }
          }
        },
        {
          test: /\.scss$/,
          exclude: /(node_modules)/,
          use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?minimize!sass-loader' })
        },
        {
          test: /\.woff(2)?$|\.eot$|\.ttf$|\.svg$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'file-loader',
            options: {
              name: '/assets/fonts/[name].[ext]'
            }
          }
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin('assets/css/[name].min.css'),
      new CopyWebpackPlugin([
        { from: './src/assets/images', to: 'assets/images' },
      ]),
      new webpack.optimize.UglifyJsPlugin,
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      }),
      ...getHtmlPlugins(),
    ]
  }
];
