const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                // css-loader is responsible for to import stylesheer into the files, and style-loader is responsible for to inject those stylesheet into index.js
                use: ['style-loader', 'css-loader'], // these loaders gets loaded from right to left
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    mode: 'development',
    resolve: {
        extensions: ['.js'],
    },
}
