const path = require('path');
const webapack = require('webpack');

module.exports = {
    entry: './client/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'server/public/javascripts')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
        ]
    }
}