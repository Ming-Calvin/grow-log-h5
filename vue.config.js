module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "assets",
  devServer: {
    open: true, // 自动打开服务器
    host: "0.0.0.0", // 主机地址,支持局域网地址访问
    port: "8088", // 端口号
    proxy: {
      // 代理设置，解决开发环境的跨域问题
      "/dev": {
        target: `http://localhost:3000`, // 目标接口的域名和端口号
        changeOrigin: true, //支持跨域
        pathRewrite: { "^/dev": "" }, // 路径重写
      },
    },
  },
  css: {
    // scss 配置
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/global.scss";
        `
      }
    }
  },
  // 配置 px2rem-loader
  chainWebpack: config => {
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('normal')
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 37.5, // 1rem 对应 75px
        remPrecision: 8 // rem 小数点后保留的位数
      })
      .end();
  }
};
