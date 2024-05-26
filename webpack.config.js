const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './src/service.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'backend.bundle.js'
    },
    externals: [nodeExternals()],
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'images', to: 'images' } // copies all files from src/public to dist/public
            ]
        })
    ],
    module: {
        rules: [

        ]
    }
};
