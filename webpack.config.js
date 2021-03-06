module.exports = {
  entry: './app-client',
  output: {
    filename: 'public/bundle.js'
  },
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        exclude: /(node_modules|app-server.js)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env', 'es2015']
        }
      }
    ]
  }
}
