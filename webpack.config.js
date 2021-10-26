const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify")
    }
  },

  entry: ["./src/index.jsx"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },

  devServer: {
    host: "0.0.0.0",
    port: 5001,
    compress: false,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/assets/index.html" }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets/img/icons",
          to: "./images/icons"
        }
      ]
    }),
    new webpack.ProvidePlugin({
      process: "process/browser"
    })
  ],
  mode: "development",
  optimization: {
    usedExports: true
  }
};
