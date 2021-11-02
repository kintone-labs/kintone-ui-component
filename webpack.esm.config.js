const path = require("path");
const webpack = require("webpack");
const packageJSON = require("./package.json");

module.exports = (env, argv) => ({
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
      VERSION:
        argv.mode === "development"
          ? JSON.stringify(packageJSON.devVersion)
          : JSON.stringify(packageJSON.version)
    })
  ]
});
