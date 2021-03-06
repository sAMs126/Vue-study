// main 作为 JS 文件的入口
// 使用 webpack 处理 main.js
// npx webpack ./src/main.js -o ./dist/bundle.js --mode development


// 1.导入 jQuery 
// $ 作为 jquery 暴露出来的属性
/* import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'yellow')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
}) */

//  导入样式表
import './css/index.css'
// 引入 node_modules 中的组件可以省略 node_modules 这层
import 'bootstrap/dist/css/bootstrap.css'

// ES6 高级语法
class Person {
    static info = { name: 'zs', age: 20 }
}
console.log(Person.info)
//回退低版本 npm install -D babel-loader@7 babel-core babel-preset-env