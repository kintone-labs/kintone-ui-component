const path = require("path");
const webpack = require("webpack");
const packageJSON = require("./package.json");

module.exports = {
  mode: "production",
  entry: {
    version: "./src/version.ts",
    "dev-info": "./src/dev-info.ts"
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
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
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.esm.json"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJSON.version),
      DEV_INFO: JSON.stringify(process.env.KUC_DEV_INFO)
    })
  ]
};
