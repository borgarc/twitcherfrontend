const webpack = require('webpack');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        API_URL: JSON.stringify(process.env.API_URL || '/api'),
      }),
    ],
  },
};
