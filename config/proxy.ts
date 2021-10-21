/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 */

export default {
  dev: {
    '/api/': {
      target: 'http://127.0.0.1:3030/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  test: {
    '/api/': {
      target: 'http://120.55.193.14:3030/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  prd: {
    '/api/': {
      target: 'http://127.0.0.1:3030/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
