const path = require('path')

// 这个配置文件，其实就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个配置对象
module.exports = {
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
    mode: 'development'
};
// npm install webpack-cli -D
// 安装 webpack-dev-server 到项目的本地开发依赖，npm i webpack-dev-server -D
// 想要正常运行 webpack-dev-server 必须在 [本地项目] 中必须安装 webpack