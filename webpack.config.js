const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const STATIC_DIR = 'frontend/static';
const ROOT = path.resolve(__dirname, 'frontend');

module.exports = {
    context: path.resolve(__dirname),
    // configure entry point to the react app
    entry: "./frontend/index.js",
    // configure the paths to the output directories
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, STATIC_DIR),
        publicPath: "/static", 
    },
    devServer: {
        port: 8081,
        headers: { 'Access-Control-Allow-Origin': '*' },
        compress: true,
        hot: true,
        historyApiFallback: true,
        static: {
            directory: './static',
        },
    },
    resolve: {
        modules: [ROOT, 'frontend/src', 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '...'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: 
                {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            /*Choose only one of the following two: if you're using 
            plain CSS, use the first one, and if you're using a
            preprocessor, in this case SASS, use the second one*/
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./frontend/index.html"
        }),
    ]
}