import { defineConfig } from 'umi';
import proxy from './proxy';
export default defineConfig({
  // 设置 node_modules 目录下依赖文件的编译方式。
  //   子配置项包含：
  // type，类型，可选 all 和 none
  // exclude，忽略的依赖库，包名，暂不支持绝对路径
  // 两种编译模式，

  // 默认是 all，全部编译，然后可以通过 exclude 忽略不需要编译的依赖库；
  // 可切换为 none，默认值编译 es5-imcompatible-versions 里声明的依赖，可通过 exclude 配置添加额外需要编译的；
  // 前者速度较慢，但可规避常见的兼容性等问题，后者反之。
  nodeModulesTransform: {
    type: 'none',
  },
  // 快速刷新（Fast Refresh），开发时可以保持组件状态，同时编辑提供即时反馈。
  fastRefresh: {},
  routes: [{ path: '/', component: 'index' }],
  define: {
    CurrentEnvironment: 'dev',
    REACT_APP_ENV: process?.env?.REACT_APP_ENV,
  },
  mfsu: {},
  // 代理
  proxy: proxy[process?.env?.REACT_APP_ENV || 'dev'],
});
