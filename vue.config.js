module.exports = {
  devServer: {
    open: true,
    // host: 'localhost',
    // port: 8080,
    proxy: {
      '/api': {
        target: 'http://http://localhost:9090/',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch') // 预加载处理
  }
}
