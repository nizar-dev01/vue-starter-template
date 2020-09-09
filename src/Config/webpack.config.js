const LiveReloadPlugin = require('webpack-livereload-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

function resolve(dir){
    return require("path").resolve(__dirname,dir);
}

module.exports = {
    plugins:[
        new LiveReloadPlugin(),
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production',
            pngquant: {
              quality: '95-100'
            }
        })
    ],
    module:{
        rules:[
            {
                test: /\.mp4$/,
                use:'file-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.js','.vue','.scss', '.json'],
        alias:{
            "@": resolve("resources/js"),
            "@data": resolve("resources/js/data"),
            "@directive": resolve("resources/js/directives"),
            "@v": resolve("resources/js/views"),
            "@c": resolve("resources/js/components"),
            "~": resolve("resources/sass"),
            "~c": resolve("resources/sass/components"),
            "~v": resolve("resources/sass/views"),
            "@asset": resolve("resources/assets"),
            "@image": resolve("resources/assets/images"),
            "@n": resolve("node_modules")
        }
    }
}