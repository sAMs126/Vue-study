// 在 webpack 中，使用 vue 进行开发

// 导入 vue 的包
// ** 使用 import Vue from 'vue' 导入的 Vue 构造函数功能不完整，只提供了 runtime-only 的方式 (阉割版)
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue'

// ** 包的查找规则
// 从 node_modules 中根据包名找到对应的文件夹，并在文件夹中找到一个叫做 package.json 的包的属性文件
// package.json 文件中，有一个 main 属性 ==> 指定了包被加载时候的入口文件

// 创建模板组件 ==> 使用 .vue 创建模板
/* var login = {
    template: '<h1>Login组件</h1>'
} */
// 导入 .vue 模板对象
import login from './template/login.vue'


var vm = new Vue({
    el: '#app',
    data: {
        msg: 123
    },
    /* components: {
        login,
    } */
    /* render: function(createElements) {
        return createElements(login)
    }, */
    render: c => c(login)
})