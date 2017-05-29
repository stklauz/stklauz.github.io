const path = require('path');

module.exports = {
    // where files are coming from
    entry: './src/scripts/app.js',

    // where file will be outputed to
    output: {
        // i had to require path to specify the project's root
        path: path.resolve(__dirname, 'bin'),

        // create a file named bundle
        filename: 'bundle.js'
    }
};


/*var webpack = require('webpack');
var path = require('path');

// Plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'wwwroot/');
var APP_DIR = path.resolve(__dirname, 'Client/src');

var config = {

    entry: APP_DIR + '/index.jsx',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },

    resolve: {
        modules: [
            path.resolve(APP_DIR),
            "node_modules"
        ],
        extensions: ['.jsx', '.js', '.scss']
    },

    plugins:
    [
        new HtmlWebpackPlugin({
            template: APP_DIR + '/index.html',
        }),

        new ExtractTextPlugin('main.css')
    ]
};

module.exports = config; */
