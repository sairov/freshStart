//Webpack input & output config file - Configuración de entrada y salida de Webpack
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'main.js'
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
        
    }

};
