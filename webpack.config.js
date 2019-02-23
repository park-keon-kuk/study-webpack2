const path = require('path');
// HTML를 자동으로 만들어서 bundle들을 저장합니다.
// - title은 페이지 제목입니다. 
const HtmlWebpackPlugin = require('html-webpack-plugin');
// (보기에)빌드 전 먼저 정해준 폴더를 다 지웁니다.
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    // 파일 에러가 어디서 오나 찾아줍니다.
    devtool: 'inline-source-map',
    // webpack-dev-server가 쓰는 host 주소입니다.
    // 여기를 기준으로 localhost:8080으로 합니다.
    // 이 설정을 안 해주면 index.html에서 bundle을 찾을 수 없다합니다.
    // - 기본이 '.'이기 때문에, '.' 에서 찾기 때문입니다.
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new HtmlWebpackPlugin({
            title: 'Developement!'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        // 서버 스크립트(server.js)를 위해 사용합니다.
        // 
        publicPath: '/',
    },
}