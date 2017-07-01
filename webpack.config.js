module.exports = {
    entry: "./",
    output: {
        "filename": "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            options: {
                presets: ["es2015"]
            }
        }]
    }
}
