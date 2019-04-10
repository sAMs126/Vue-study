const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            // 创建一个在内存中生成 HTML 页面
            template: path.join(__dirname, 'src/index.html'),//指定模板路径
            filename: 'index.html' // 指定生成页面名称
        }),
        new VueLoaderPlugin()
    ],
    /* resolve: {
        alias: {
            // 设置 vue 导入时的包路径
            'vue$': 'vue/dist/vue.js'
        }
    }, */
    module: { // 用于配置所有的第三方模块加载器
        rules: [ // 所有第三方的匹配规则
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理图片的 url 的 loader
            // { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=55570&name=[hash:8]-[name].[ext]' },
            // 处理字体的 loader
            // { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader' },
            // 配置 babel 
            // { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
            // 处理 .vue 文件的 loader
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    }
};

module.exports = config