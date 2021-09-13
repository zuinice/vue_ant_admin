module.exports = {
  //部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录：在npm run build时，生成文件的目录名称
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  //代码保存时进行eslint检测
  lintOnSave: false,
  // 注意sass，scss，less的配置  
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`,
      },
    },
  },
  devServer: {
    open: true, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      "/devApi": {
        target: "http://www.web-jshtml.cn/productapi", //API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          "^/devApi": ''
        }
      }
    }
  },
}