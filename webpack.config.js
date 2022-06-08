const path = require("path");
const webpack = require("webpack");
const packageJSON = require("./package.json");

module.exports = {
  entry: "./src/index.bundle.ts",
  output: {
    path: path.resolve(__dirname, "umd"),
    library: ["Kucs", packageJSON.version],
    libraryTarget: "umd",
    filename: "kuc.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/\bcore-js\b/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      ie: 11
                    },
                    useBuiltIns: "entry",
                    corejs: 3
                  }
                ]
              ]
            }
          }
        ]
      },
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
      VERSION: JSON.stringify(packageJSON.version),
      DEV_INFO: JSON.stringify(process.env.KUC_DEV_INFO)
    })
  ]
};
