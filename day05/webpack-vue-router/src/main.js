import Vue from 'vue'
// 1.导入路由
import VueRouter from 'vue-router'
// 2.设置 VueRouter
Vue.use(VueRouter)

import app from './template/app.vue'
import account from './template/Account.vue'
import goodsList from './template/GoodsList.vue'


// 3.创建路由对象
const router = new VueRouter({
    routes: [
        {path: '/account', component: account},
        {path: '/goodsList', component: goodsList}
    ]
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 4.挂载路由
})