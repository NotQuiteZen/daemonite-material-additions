const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './dev/dev.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    }
};