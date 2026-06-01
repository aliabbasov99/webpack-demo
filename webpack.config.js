const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry : "./src/index.js",
    output :{
        filename: "[name]-[contenthash:8].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({template: "index.html"}),
    ],
    devServer :{
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                        url: true,
                        },
                    }
                ]
                
            }
        ]
    }
}