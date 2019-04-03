[TOC]

# 什么是Vue.js

- Vue.js 是目前最火的一个前端框架，React是最流行的一个前端框架（React除了开发网站，还可以开发手机App， Vue语法也是可以用于进行手机App开发的，需要借助于Weex）

- Vue.js 是前端的**主流框架之一**，和Angular.js、React.js 一起，并成为前端三大主流框架！
- Vue.js 是一套构建用户界面的框架，**只关注视图层**，它不仅易于上手，还便于与第三方库或既有项目整合。（Vue有配套的第三方类库，可以整合起来做大型项目的开发）
- 前端的主要工作？主要负责MVC中的V这一层；主要工作就是和界面打交道，来制作前端页面效果；

# 为什么要学习流行框架

- 提高开发效率的发展历程：原生JS -> Jquery之类的类库 -> 前端模板引擎 -> Angular.js / Vue.js（能够帮助我们减少不必要的DOM操作；提高渲染效率；双向数据绑定的概念【通过框架提供的指令，程序员只需要关心数据的业务逻辑，不再关心DOM是如何渲染的了】）

```mermaid
graph LR
	原生JS --> Jquery等类库
	Jquery等类库 --> 前端模板引擎
	前端模板引擎 --> Angular.js/Vue.js
```

# 框架和库的区别

- 框架：是一套完整的解决方案；对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目。
- 库（插件）：提供某一个小功能，对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其它库实现需求

# 后端中的 MVC 与 前端中的 MVVM 之间的区别

- MVC 是后端的分层开发概念
- MVVM是前端视图层的概念，主要关注于 视图层分离，也就是说：MVVM把前端的视图层，分为了 三部分 Model, View , VM ViewModel

![MVVM理解](pic/pic01.png)

# Vue指令

## `v-cloak`

- **不需要表达式**

- **用法**：

  这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 <font color=#e96900>` [v-cloak] { display: none } `</font> 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

- 用于避免网速过慢造成数据未加载情况

![网页出现{{}}情况](pic/pic02.png)

## `v-text`

- **预期**：`string`

- **详细**：

  更新元素的 <font color=#e96900>`textContent`</font>。如果要更新部分的 <font color=#e96900>`textContent`</font> ，需要使用 <font color=#e96900>`{{ Mustache }}`</font> 插值。

### `v-cloak` 与 `v-text` 的区别

- 默认 `v-text` 是没有闪烁问题
- `v-text` 会覆盖掉元素中原本的内容，但是 插值表达式 只会替换自己的占位符，不会把整个内容清空
- 都会把内容当作普通的文本输出

## `v-html`

- **预期**：`string`

- **详细**：

  更新元素的 <font color=#e96900>`innerHTML`</font> 。**注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译** 。

  如果试图使用 <font color=#e96900>`v-html`</font> 组合模板，可以重新考虑是否通过使用组件来替代。

## `v-bind`

*Vue 提供的属性绑定机制*

- **缩写**：<font color=#e96900>`:`</font>

- **用法**：

  动态地绑定一个或多个特性，或一个组件 prop 到表达式。

  在绑定 <font color=#e96900>`class`</font> 或 <font color=#e96900>`style`</font> 特性时，支持其它类型的值，如数组或对象。

  在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。

  没有参数时，可以绑定到一个包含键值对的对象。注意此时 <font color=#e96900>`class`</font> 和 <font color=#e96900>`style`</font> 绑定不支持数组和对象。

## `v-on`

*Vue 提供事件绑定机制*

- **缩写**：<font color=#e96900>`@`</font>

- **用法**：

  绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

  用在普通元素上时，只能监听**原生 DOM 事件**。用在自定义元素组件上时，也可以监听子组件触发的**自定义事件**。

  在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 <font color=#e96900>`$event`</font> 属性：<font color=#e96900>`v-on:click="handle('ok', $event)"`</font>。

  **事件修饰符**

  - <font color=#e96900>`.stop`</font> - 调用 <font color=#e96900>`event.stopPropagation()`</font> 阻止冒泡。

  ```html
  <div class="inner-div" @click="div_handle">
      <input type="button" value="按钮冒泡" @click="btn_handle">
  </div>
  ```

  点击按钮会出现冒泡事件

  ![事件冒泡](pic/pic03.png)

  ```html
  <div class="inner-div" @click="div_handle">
      <input type="button" value="按钮冒泡" @click.stop="btn_handle">
  </div>
  ```

  阻止冒泡事件

  ![阻止冒泡](pic/pic04.png)

  - <font color=#e96900>`.prevent`</font> - 调用 <font color=#e96900>`event.preventDefault()`</font> 阻止默认事件。

  ```html
  <a href="http://www.baidu.com" @click.prevent="a_handle">点我，去百度</a>
  ```

  点击链接并没有进行跳转

  ![阻止默认行为](pic/pic05.png)

  - <font color=#e96900>`.capture`</font> - 添加事件侦听器时使用 capture （事件捕获） 模式。

  ```html
  <div class="inner-div" @click.capture="div_handle">
      <input type="button" value="按钮冒泡" @click="btn_handle">
  </div>
  ```

  点击按钮从外往里进行事件触发

  ![捕获机制](pic/pic06.png)

  - <font color=#e96900>`.self`</font> - 只当事件是从侦听器绑定的元素本身触发时才触发回调。

  ```html
  <div class="inner-div" @click.self="div_handle">
      <input type="button" value="按钮冒泡" @click="btn_handle">
  </div>
  ```

  点击div才会触发元素自身事件

  ![自身触发](pic/pic07.png)

  - <font color=#e96900>`.once`</font> - 只触发一次回调。

  ```html
  <a href="http://www.baidu.com" @click.prevent.once="a_handle">点我，去百度</a>
  ```

## `v-model`

- **用法**：

  在表单控件或者组件上创建双向绑定。

## `v-for`

### 用 `v-for` 把一个数组对应为一组元素

我们用 <font color=#e96900>`v-for`</font> 指令根据一组数组的选项列表进行渲染。<font color=#e96900>`v-for`</font> 指令需要使用 <font color=#e96900>`item in items`</font> 形式的特殊语法，<font color=#e96900>`items`</font> 是源数据数组并且 <font color=#e96900>`item`</font> 是数组元素迭代的别名。
*循环基本数组*
```html
<p v-for="(item, index) in items">索引：{{index}} -- 元素：{{item}}</p>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        items: [1, 2, 3, 4, 5]
    },
    methods: {}
})
```
*循环对象数组*
```html
<p v-for="(user, index) in users">id: {{user.id}} -- name: {{user.name}} -- index: {{index}}</p>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        users:[
            {id: 1, name: 'zs'},
            {id: 2, name: 'ls'},
            {id: 3, name: 'ww'},
            {id: 4, name: 'zl'},
        ]
    },
    methods: {}
})
```
### 一个对象的 `v-for`

也可以用 <font color=#e96900>`v-for`</font> 通过一个对象的属性来迭代。

第一个的参数为属性，第二个的参数为键名，第三个参数为索引。

```html
<p v-for="(val, key, index) in user" >值：{{val}} -- 键：{{key}} -- 索引：{{index}}</p>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        user:{
            id: 1,
            name: 'Tony Stark',
            gender: 'man'
        }
    },
    methods: {}
})
```
> 在遍历对象时，是按 `Object.keys()` 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下是一致的。
### 一段取值范围的 `v-for`

<font color=#e96900>`v-for`</font> 也可以取整数。在这种情况下，它将重复多次模板。

```html
<p v-for="count in 5" >第 {{count}} 次循环</p>
```

### <font color=#e96900>`key`</font>

当 Vue.js 用 `v-for` 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。

这个默认的模式是高效的，但是只适用于**不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 <font color=#e96900>`key`</font> 属性。理想的 <font color=#e96900>`key`</font> 值是每项都有的唯一 id。

```html
<p v-for="item in list" :key="item.id">
    <input type="checkbox" name="" id="">
    {{item.id}} -- {{item.name}}
</p>
```

> 不要使用对象或数组之类的非原始类型值作为 <font color=#e96900>`v-for`</font> 的 <font color=#e96900>`key`</font>。用字符串或数类型的值取而代之。

## `v-if`

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

## `v-show`

另一个用于根据条件展示元素的选项是 `v-show` 指令。

```html
<div id="app">
    <input type="button" value="toggle" @click="flag=!flag">
    <h3 v-if="flag">这是用 v-if 控制的元素</h3>
    <h3 v-show="flag">这是用 v-show 控制的元素</h3>
</div>
```
不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS 属性 `display`。

![v-if和v-show的区别](pic/pic08.png)

### v-if 和 v-show 比较

> `v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
>
> `v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
>
> 相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
>
> 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

`v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

# 在 Vue 中使用样式

## 使用 class 样式

*数组语法*

我们可以把一个数组传给 <font color=#e96900>`v-bind:class`</font>，以应用一个 class 列表：

```html
<h1 :class="['red']">Look! Styles, Manipulate Text, Colors, Boxes and more...</h1>
```

如果你也想根据条件切换列表中的 class，可以用三元表达式：

```html
<h1 :class="['red', flag?'active':'']">Look! Styles, Manipulate Text, Colors, Boxes and more...</h1>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        flag: true
    },
    methods: {}
})
```

只有在 `isActive` 是 truthy[^1] 时才添加 `activeClass`。

不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：

```html
<h1 :class="['red', {'active':flag}]">Look! Styles, Manipulate Text, Colors, Boxes and more...
```
*对象语法*

我们可以传给 <font color=#e96900>`v-bind:class`</font> 一个对象，以动态地切换 class：

```html
<h1 :class="{red: true, thin: false, italic: true, active: false}">Look! Styles, Manipulate Text, Colors, Boxes and more...</h1>
```

绑定的数据对象不必内联定义在模板里：

```html
<h1 :class="classObj">Look! Styles, Manipulate Text, Colors, Boxes and more...</h1>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        classObj: {
            red: true,
            thin: false,
            italic: true,
            active: false
        }
    },
    methods: {}
})
```

## 使用 style 样式

**绑定内联样式**

*对象语法*

<font color=#e96900>`v-bind:style`</font> 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名：

```html
<h1 :style="{color:'red', 'font-weight':200}">Look! Styles, Manipulate Text, Colors, Boxes and more...</h1>
```

直接绑定到一个样式对象通常更好，这会让模板更清晰：

```html
<h1 :style="styleObj1">Look! Styles, Manipulate Text, Colors, Boxes and more...</h1>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        styleObj1: {color:'red', 'font-weight':200}
    },
    methods: {}
})
```

<font color=#e96900>`v-bind:style`</font> 的数组语法可以将多个样式对象应用到同一个元素上：

```html
<h1 :style="[styleObj1, styleObj2]">Look! Styles, Manipulate Text, Colors, Boxes and more...</h1>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        styleObj1: {color:'red', 'font-weight':200},
        styleObj2: {'font-style': 'italic'}
    },
    methods: {}
})
```

# 过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 v-bind 表达式** 。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

> 过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数。
>
> 过滤器的 function ，第一个参数已经规定死了，永远是管道符前面传递过来的数据

过滤器是 JavaScript 函数，因此可以接收参数：

```html
<p>{{ message | filterA('arg1', arg2) }}</p>
```

这里，`filterA` 被定义为接收三个参数的过滤器函数。其中 `message` 的值作为第一个参数，普通字符串 `'arg1'` 作为第二个参数，表达式 `arg2` 的值作为第三个参数。

> 同名过滤器遵从<font color=#e96900>`就近原则`</font>， 私有过滤器 > 全局过滤器

## 全局过滤器

*在创建 Vue 实例之前全局定义过滤器*

所有的 vm 实例都共享

```js
// 全局过滤器，实现时间的格式化
// ** 在创建 Vue 实例之前定义全局过滤器
// pattern="" ES6 形参初始默认值，防止undefined情况
Vue.filter('dateFormat', function (dateStr, pattern="") {
    var dt = new Date(dateStr)
    // 手动拼接处 yyyy-mm-dd 格式
    var y = dt.getFullYear()
    var m = dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1;
    var d = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
    // 返回模板字符串
    // return `${y}-${m}-${d}`

    if ('yyyy-mm-dd' === pattern.toLowerCase()) {
        return `${y}-${m}-${d}`
    }else {
        var hh = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours();
        var mm = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
        var ss = dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds();

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }
})


new Vue({
  // ...
})
```

## 私有过滤器

*在一个组件的选项中定义本地的过滤器*

```html
<div id="app2">
    <h1 :style="{color:'red', 'font-style': 'italic'}">{{dt | dateFormat("yyyy-MM-dd")}}</h1>
</div>
```

```js
var vm2 = new Vue({
    el: '#app2',
    data:{
        dt: new Date()
    },
    methods: {},
    filters: {
        // 定义私有过滤器
        dateFormat: function (dateStr, pattern="") {
            var dt = new Date(dateStr)
            // 手动拼接处 yyyy-mm-dd 格式
            var y = dt.getFullYear()
            var m = dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1;
            var d = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
            // 返回模板字符串
            // return `${y}-${m}-${d}`

            if ('yyyy-mm-dd' === pattern.toLowerCase()) {
                return `${y}-${m}-${d} ~~~~`
            }else {
                var hh = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours();
                var mm = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes();
                var ss = dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds();

                return `${y}-${m}-${d} ${hh}:${mm}:${ss} ~~~~`
            }
        }
    }
})
```









**译者注**

[^1]: truthy 不是 `true`，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 的解释。