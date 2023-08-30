var moment = require('moment')
const Timestamp = moment().format('x');
const port = process.env.port || process.env.npm_config_port || 10001 // dev port

module.exports = {
  lintOnSave: true,
  indexPath: 'index.html',
  assetsDir: 'static',
  publicPath: process.env.PRO_URL,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  },

  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },

  chainWebpack(config) {
    // 全局变量
    config.plugin('define').tap(args => {
      args[0]['process.env'].VUE_APP_VERSION = moment().format('YYYYMMDD');
      return args
    })

    // 给js和css配置版本号
    if (process.env.NODE_ENV === 'production') {
      config.output.filename('static/js/[name].' + Timestamp + '.js').end();
      config.output.chunkFilename('static/js/[name].' + Timestamp + '.js').end();
      config.plugin('extract-css').tap(args => [{
        filename: `static/css/[name].${Timestamp}.css`,
        chunkFilename: `static/css/[name].${Timestamp}.css`
      }])
    }
    // 添加分析工具
    if (process.env.npm_config_report) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        .end();
      config.plugins.delete('prefetch')
    }
  },

}