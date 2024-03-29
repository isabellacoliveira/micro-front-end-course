const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },  
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', 
      fileName: 'remoteEntry.js', 
      exposes: {
        // here we're renaming something , its an Alias 
        './ProductsIndex': './src/bootstrap'
      }, 
    //   shared: {
    //     faker: {
    //         // we only want to load up one single copy of faker
    //         singleton: true
    //     }
    // }
     shared: ['faker']
    }),

    // take a look of wathever files are coming out of our webpack process
    // will add all the script tags automatically
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
