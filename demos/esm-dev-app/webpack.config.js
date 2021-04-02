const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js"]
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(lit-element|lit-html)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  targets: {
                    ie: 11
                  }
                }
              ]
            ],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
