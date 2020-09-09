function resolve(dir){
    return require("path").resolve(__dirname,dir);
}

module.exports = {
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
            "@": resolve("src"),
            "@data": resolve("src/data"),
            "@directive": resolve("src/directives"),
            "@v": resolve("src/views"),
            "@c": resolve("src/components"),
            "~": resolve("src/sass"),
            "~c": resolve("src/sass/components"),
            "~v": resolve("src/sass/views"),
            "@asset": resolve("src/assets"),
            "@image": resolve("src/assets/images"),
            "@n": resolve("node_modules")
        }
    }
}