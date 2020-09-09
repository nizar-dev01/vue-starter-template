const mix = require('laravel-mix');
const webpackConfig = require('./webpack.config');

    mix.js('resources/js/app.js', 'public/js')
        .webpackConfig(webpackConfig);

if(mix.inProduction()){
    mix.version()
    .options({
        postCss: [
           require('css-mqpacker'),
           require('autoprefixer')
        ]
     })
}

if(process.env.NODE_ENV === "testing"){
    const nodeExternals = require('webpack-node-externals');
    mix.webpackConfig((webpack) => {
        return {
            devtool: "inline-cheap-module-source-map",
            externals: [nodeExternals()],
            module: {
                rules: [
                    {
                        test: /\.scss/,
                        use: "null-loader",
                    },
                ],
            },
        };
    });
}