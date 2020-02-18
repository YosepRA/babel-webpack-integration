const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    compress: true,
    // publicPath is where the output of webpack bundle will come out. URL is relative to contentBase.
    publicPath: '/js',
    // contentBase is basically deciding to use "this folder" as the root of deployed app.
    contentBase: path.join(__dirname, 'dist')
  }
};

// ======================================================================================================== //

// Direct Babel config at webpack config file. (WORKED)
// module: {
//   rules: [
//     {
//       test: /\.m?js$/,
//       exclude: /node_modules/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env']
//         }
//       }
//     }
//   ];
// }
