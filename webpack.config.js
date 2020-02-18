// webpack.config.js

const { resolve } = require('path')

module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'authorizevi2018.js',
        library: 'authorizevi2018'
    }
}
