const path = require('path');

module.exports = {
    chainWebpack: config => {
      if(config.plugins.has('extract-css')) {
        const extractCSSPlugin = config.plugin('extract-css')
        extractCSSPlugin && extractCSSPlugin.tap(() => [{
          filename: '[name].css',
          chunkFilename: '[name].css'
        }])
      }
    },
    configureWebpack: {
      output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
      }
    },
    pages: {
        app1: {
            entry: './src/app1/main.js',
            template: 'index.php',
            filename: 'index.html'
        },
        app2: {
            entry: './src/app2/main.js',
            template: 'page2.php',
            filename: 'page2.html'
        }
    },
    publicPath: './',
  }