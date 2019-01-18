const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SPSaveWebpackPlugin = require('spsave-webpack-plugin');
module.exports = {
  entry: {
    helloworld:'./app/helloworld/helloworld.ts',
    weather:'./app/weather/weather.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  target: "node",
  externals:{
    '@pnp/pnpjs': 'pnp'
  },
  output: {
    publicPath:'http://siteurl/Style Library/webparts', // to get correct path inside sharepoint
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'helloworld.html', // name of the output file
      chunks:['helloworld'], // name of the entry point defined above
      template: './app/helloworld/helloworld.html' // path to the html for the webpart
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'weather.html', // name of the output file
      chunks:['weather'], // name of the entry point defined above
      template: './app/weather/weather.html' // path to the html for the webpart
    }),
    new SPSaveWebpackPlugin({
      "coreOptions": {
          "checkin": true,
          "checkinType": 1,
          "siteUrl": "http://siteurl"
      },
      "credentialOptions": null,
      "fileOptions": {
          "folder": "Style Library/webparts"
      }
  })]
};