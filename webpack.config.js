const path = require("path");

module.exports = {
  entry: {
    "polyfill.min": "./src/polyfill/index.ts",
    "kuc.min": "./src/index.bundle.ts"
  },
  output: {
    path: path.resolve(__dirname, "umd"),
    library: "Kuc",
    libraryTarget: "umd",
    filename: "[name].js"
  },
  target: ["web", "es5"],
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
  }
};
