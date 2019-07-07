const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    port: 1234,
    open: true
  }
};
