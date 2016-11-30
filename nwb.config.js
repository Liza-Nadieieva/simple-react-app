module.exports = {
  type: 'react-app',
  webpack: {
    extra: {
      devtool: 'cheap-source-map',
      resolve: {
        alias: {
          webworkify: 'webworkify-nwb'
        }
      }
    }
  }
}
