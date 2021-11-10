const path = require("path");
const webpack = require("webpack");
const packageJSON = require("./package.json");

module.exports = {
  mode: "production",
  entry: "./src/version.ts",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "version.js",
    library: {
      type: "module"
    }
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJSON.version)
    })
  ]
};
