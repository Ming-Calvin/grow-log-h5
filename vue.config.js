module.exports = {
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
        remUnit: 75, // 1rem 对应 75px
        remPrecision: 8 // rem 小数点后保留的位数
      })
      .end();
  }
};
