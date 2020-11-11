module.exports = {
    devServer: {
        port:8001,//修改自己的端口号
      proxy: {
        '/jd': {
          target: 'http://10.36.138.122:9999',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }