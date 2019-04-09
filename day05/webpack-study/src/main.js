// main 作为 JS 文件的入口

// 1.导入 jQuery 
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor',function () {
        return '#' + 'D97634'
    })
})
// 使用 webpack 处理 main.js
// npx webpack ./src/main.js -o ./dist/bundle.js --mode development