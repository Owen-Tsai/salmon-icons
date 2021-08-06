const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'stylus-loader'}
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ],
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'src')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
