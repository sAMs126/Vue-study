// 这个配置文件，其实就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个配置对象


const path = require('path')

const config = {
    // 在配置文件中手动指定 入口 和 出口
    // 入口：表示使用 webpack 打包哪个文件
    // entry: './src/main.js',
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件相关配置
    output: {
        // 指定打包好的文件输出到哪个目录中去
        // path: './dist',
        path: path.join(__dirname, './dist'),
        // 指定文件名称
        filename: 'bundle.js'
    },
    mode: 'development',
    module: { // 用于配置所有的第三方模块加载器
        rules: [ // 所有第三方的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
};

module.exports = config
// npm install webpack-cli -D
// 安装 webpack-dev-server 到项目的本地开发依赖，npm i webpack-dev-server -D
// 想要正常运行 webpack-dev-server 必须在 [本地项目] 中必须安装 webpack