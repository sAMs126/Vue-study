<template>
    <div class="container">
        <h1>.vue 的 h1 组件</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/goodsList">goodsList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {

    }
}
</script>

<style >

</style>
