const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: "source-map",
  context: path.resolve(__dirname, "./app"),
  entry: {
    app: "./components/main.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public/build"),
    publicPath: "/build"
  },
  devServer: {
    hot: true,
    watchContentBase: true,
    //noInfo: true,
    contentBase: path.resolve(__dirname, "./public"),
    compress: true,
    historyApiFallback:true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /public/],
        loader: "babel-loader",
        query: {
          presets:["es2015", "react"],
          plugins: ["transform-runtime"]
        }
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, /public/],
        loader: "babel-loader",
        query: {
          presets:["es2015", "react"],
          plugins: ["transform-decorators-legacy"]
        }
      }
    ]
  }
};
