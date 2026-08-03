const path = require("path");
const webpack = require("webpack");
const packageJSON = require("./package.json");

module.exports = {
  entry: "./src/index.bundle.ts",
  output: {
    path: path.resolve(__dirname, "umd"),
    library: ["Kucs", packageJSON.version],
    libraryTarget: "umd",
    filename: "kuc.min.js",
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
                      ie: 11,
                    },
                  },
                ],
              ],
              // Babel 8 migration: preset-env's useBuiltIns/corejs options were
              // removed; core-js polyfills now come from babel-plugin-polyfill-corejs3.
              // "entry-global" is the equivalent of the old useBuiltIns: "entry".
              // version = installed core-js minor (3.49). https://babeljs.io/docs/v8-migration
              plugins: [
                [
                  "babel-plugin-polyfill-corejs3",
                  {
                    method: "entry-global",
                    version: "3.49",
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            onlyCompileBundledFiles: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(packageJSON.version),
      DEV_INFO: JSON.stringify(process.env.KUC_DEV_INFO),
    }),
  ],
};
