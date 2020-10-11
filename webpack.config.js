// let imagemin = require('imagemin-webpack-plugin');
// let copyWebpackPlugin = require('copy-webpack-plugin');
let path = require("path");
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let conf = {
    entry: {
      app:[ 
    './src/js/index.js',
    './src/css/style.css',
      ]
    },
    output:{
      path:  path.resolve(__dirname, './dist'),
      filename: 'scripts.js',
      publicPath: 'dist/',
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
        // {
        //   test: /\.(png|gif|jpe?g)$/,
        //   loaders:[
        //     {
        //       loader: 'file-loader',
        //       options: {
        //         name: '[path][name].[ext]'
        //       }
        //     },
        //     'image-loader',
        //   ]
        // }
      ]
    },
    plugins:[new MiniCssExtractPlugin({filename: 'styles.css'})],
   
}
module.exports = conf;
