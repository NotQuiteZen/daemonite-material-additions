module.exports = env => {

    console.log(`Running in ${env} mode.`);

    return {

        mode: env,

        entry: {
            'daemonite-material-additions': './index.js',
        },

        output: {
            path: __dirname + '/lib',
            filename: '[name].js',
            library: 'daemonite-material-additions',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                    }
                }
            ]
        }
    }
};
