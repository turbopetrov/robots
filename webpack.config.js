let imagemin = require('imagemin-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require("path");
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
let conf = {
    context: path.resolve(__dirname, "src"),
    entry: {
      app:[ 
    './js/index.js',
    './css/style.css',
      ]
    },
    output:{
      path:  path.resolve(__dirname, 'dist'),
      filename: 'js/scripts.js',
      publicPath: '../',
    },
    devServer: {
      contentBase: "./html", 
    },
    module: {
      rules: [
        {
          test:/\.js$/,
          loader: 'babel-loader'
        },
        {
          test:/\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
            ],
        },
        {
          test: /\.(png|gif|jpe?g)$/,
          loaders:[
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            },
            {loader: 'img-loader'},
          ],
        },
      ],
    },
    plugins:[
      new MiniCssExtractPlugin(
          {
            filename: 'css/styles.css'
          }
        ),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin (
        {
          patterns: [
            {from: './img', to: 'img'},
          ]
        }
      ) 
         
            ],
   
}
module.exports = conf;
