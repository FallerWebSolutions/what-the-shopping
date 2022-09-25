const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    mode: isProduction ? 'production' : 'development',
    entry: path.join(__dirname, "src", "index.tsx"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    resolve: { 
        modules: ['node_modules'],
        extensions: ['.tsx', '.js', '.jsx']
    },
    devServer: {
        port: 9004,
        allowedHosts: 'all',
        historyApiFallback: true,
  },
        
     module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}
module.exports = config