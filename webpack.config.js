const path = require('path')
module.exports = {
    entry: '/massgov.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname,'dist'),
        libraryTarget: 'window',
    }
}