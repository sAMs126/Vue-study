export default{
    name: 'zs',
    age: 23
}
// export default 向外暴露成员，可以使用任意的变量来接收
// ** 在一个模块中，export default 只允许向外面暴露 1 次

// 其他成员可以使用 export 向外暴露成员
// ** 使用 export 向外暴露成员，只能使用 {} 来接收，这种形式叫做 [按需导出] ==> 在 {} 中可选导出，不是必须导出
export var title = 'export 向外暴露成员'
export var content = 'content信息'