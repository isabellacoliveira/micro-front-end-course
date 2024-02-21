const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },  
  plugins: [
    // take a look of wathever files are coming out of our webpack process
    // will add all the script tags automatically
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
