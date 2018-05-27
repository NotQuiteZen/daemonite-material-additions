module.exports = env => {

    console.log(`Running in ${env} mode.`);

    let entries = env === 'production' ? {'lib/daemonite-material-additions': './index.js'} : {'dev': './dev.js'};

    return {

        mode: env,

        entry: entries,

        output: {
            path: __dirname,
            filename: '[name].js',
            library: 'daemonite-material-additions',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },

        devServer: {
            publicPath: '/',
            host: "0.0.0.0"
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
