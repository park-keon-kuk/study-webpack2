# 5장 Hot Module Replacement

> 4장 Development에서 이어집니다.

## 실습에 필요한 설치 파일들

```bash
npm install --save-dev style-loader css-loader
```

> i는 install, -D는 --save-dev 의 약어입니다.

## webpack.config.js 설정

```javascript
module.exports = {
// 생략
    plugins: [
        // 생략
        new webpack.HotModuleReplacementPlugin(),
        // 생략
    ],
// 생략
}
```

## webpack-dev-server만 사용할 경우

```javascript
// webpack.config.js
// 생략,
devServer: {
    contentBase: './dist',
    hot: true
},
// 생략,
```

> devServer에 **hot** 옵션을 넣어줍니다.

package.json에서 script에 다음을 추가하고 실험할 수 있습니다.

```json
{
    "scripts": {
        "webpack-dev-server": "webpack-dev-server --open",
    }
}
```

## node.js 서버를 사용할 경우

```javascript
// dev-server.js
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});
```

> 따로 webpack.config.js에서 devServer 설정없이 서버 코드에서 작업할 수 있습니다.

package.json에서 script에 다음을 추가하고 실험할 수 있습니다.

```json
{
    "scripts": {
        "dev-server": "node dev-server.js",
    }
}
```

## print.js 대 style.css

> 두 파일의 경우 print.js는 `if(moduke.hot)...`가 필요했지만, style.css는 추가적으로 코드가 필요없었습니다. style-loader는 내부적으로 module.hot.accept를 사용하고 있기 때문입니다.
