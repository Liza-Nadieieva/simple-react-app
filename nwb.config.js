module.exports = {
  type: 'react-app',
  webpack: {
    devtool: 'cheap-source-map',
    extra: {
      resolve: {
        alias: {
          webworkify: 'webworkify-webpack-dropin'
        }
      }
    }
  }
}
