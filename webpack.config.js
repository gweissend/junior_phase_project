module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader'
            }
        ]
    }
}