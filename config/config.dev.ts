import { defineConfig } from 'umi';
export default defineConfig({
  define: {
    CurrentEnvironment: 'dev',
    REACT_APP_ENV: process.env.REACT_APP_ENV,
  },
});
