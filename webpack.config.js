const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/main.ts',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  output: {
    publicPath: '',
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }]
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    roots: [path.join(__dirname, 'src')],
    alias: {
      '@core': path.join(__dirname, 'src/core')
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
}
