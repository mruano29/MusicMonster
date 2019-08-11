const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/react']
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                    }]
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
            }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};