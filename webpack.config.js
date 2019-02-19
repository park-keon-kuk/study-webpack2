const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            // css
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            // image
            test: /\.(png|jpg|gif)$/,
            loader: 'file-loader'
        }]
    }
}