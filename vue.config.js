const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
        .set('@$', resolve('src'))
        .set('$api', path.resolve(__dirname, 'src/api'))
        .set('$utils', path.resolve(__dirname, 'src/utils'))
        .set('assets', resolve('src/assets'))
        .set('css', resolve('src/assets/css'))
        .set('img', resolve('src/assets/img'))
        .set('components', resolve('src/components'))
        .set('views', resolve('src/views'))
        .set('$config', path.resolve(__dirname, 'src/config'))
  },
}