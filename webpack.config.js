const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: "development",
   entry: path.resolve(__dirname, 'src/index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     outputPath: 'images',
                  }
               },
            ],
         },
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         }
      ],
   },
   plugins: [new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
   })],
   devServer: {
      open: true
   }
};