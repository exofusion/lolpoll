var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          { test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
};