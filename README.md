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
> 根据给定长度自动在字符串的前面补充想补充的字符串（只返回修改后的字符串，不修改原字符串）
>
> str.padStart(targetLength [, padString])	从头添加
>
> str.padEnd(targetLength [, padString])	 从尾添加
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
            var y = dt.getFullYear();
            var m = (dt.getMonth() + 1).toString().padStart(2, '0');
            var d = dt.getDate().toString().padStart(2, '0');
            // 返回模板字符串
            // return `${y}-${m}-${d}`

            if ('yyyy-mm-dd' === pattern.toLowerCase()) {
                return `${y}-${m}-${d} ~~~~`
            }else {
                var hh = dt.getHours().toString().padStart(2, '0');
                var mm = dt.getMinutes().toString().padStart(2, '0');
                var ss = dt.getSeconds().toString().padStart(2, '0');

                return `${y}-${m}-${d} ${hh}:${mm}:${ss} ~~~~`
            }
        }
    }
})
```

# 按键修饰符

在监听键盘事件时，我们经常需要检查详细的按键。Vue 允许为 `v-on` 在监听键盘事件时添加按键修饰符：

```html
<label >
    Name:
    <input type="text" class="form-control" v-model="name" v-on:keyup.enter="add">
</label>
```

# 自定义指令

除了核心功能默认内置的指令 (`v-model` 和 `v-show`)，Vue 也允许注册自定义指令。注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

*全局指令*

```js
// 全局自定义指令
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})
```

*私有指令*

```js
directives: {
    // 自定义私有指令
    fw: {
        bind: function (el, binding) {
            el.style.fontWeight = binding.value
        }
    }
}
```


## 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- <font color=#e96900>`bind`</font>：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。`运用到和样式有关`
- <font color=#e96900>`inserted`</font>：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。`运用到和行为有关`
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。
- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

## 钩子函数的参数

- <font color=#e96900>`el`</font>：指令所绑定的元素，可以用来直接操作 DOM 。

- <font color=#e96900>`binding`</font>：一个对象，包含以下属性：
  - <font color=#e96900>`name`</font>：指令名，不包括 `v-` 前缀。
  - <font color=#e96900>`value`</font>：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - <font color=#e96900>`expression`</font>：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"`中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。

- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3) 来了解更多详情。

- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

# 生命周期

![生命周期图示](pic/pic10.png)

# 动画

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

## 单元素/组件的过渡

Vue 提供了 <font color=#e96900>`transition`</font> 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡

- 条件渲染 (使用 `v-if`)
- 条件展示 (使用 `v-show`)
- 动态组件
- 组件根节点

当插入或删除包含在 <font color=#e96900>`transition`</font> 组件中的元素时，Vue 将会做以下处理：

1. 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
2. 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
3. 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 `nextTick` 概念不同)

## 过渡类名
![过度类名](pic/pic11.png)

在进入/离开的过渡中，会有 6 个 class 切换。

1. <font color=#e96900>`v-enter`</font>：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. <font color=#e96900>`v-enter-active`</font>：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. <font color=#e96900>`v-enter-to`</font>: 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 <font color=#e96900>`v-enter`</font> 被移除)，在过渡/动画完成之后移除。
4. <font color=#e96900>`v-leave`</font>: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. <font color=#e96900>`v-leave-active`</font>：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. <font color=#e96900>`v-leave-to`</font>: 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 <font color=#e96900>`v-leave`</font> 被删除)，在过渡/动画完成之后移除。

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。如果你使用了 `<transition name="my-transition">`，那么 `v-enter` 会替换为 `my-transition-enter`。

```html
<div id="app">
    <input type="button" value="toggle" @click="show = !show">
    <!-- 使用 transition 包裹元素 -->
    <transition>
        <h3 v-if="show">Look! Styles, Manipulate Text, Colors, Boxes and more...</h3>
    </transition>
</div>
```

```css
    <style>
        /* 自定义两组样式来控制 transition 内部元素实现的动画*/
        /* v-enter [时间点] 进入之前元素的起始位置，此时还没有开始进入 */
        /* v-leave-to [时间点] 元素离开之后，最终的结束状态 */
        .v-enter,
        .v-leave-to{
            opacity: 0;
        }
        /* v-enter-active [时间段] 应用在整个进入过渡的过程中 */
        /* v-leave-active [时间段] 应用在整个离开过渡的过程中 */
        .v-enter-active,
        .v-leave-active{
            transition: all .5s ease;
        }
    </style>
```

## 列表过渡

那么怎么同时渲染整个列表，比如使用 `v-for` ？在这种场景中，使用 <font color=#e96900>`<transition-group>`</font> 组件。在我们深入例子之前，先了解关于这个组件的几个特点：

- 不同于 `<transition>`，它会以一个真实元素呈现：默认为一个 `<span>`。你也可以通过 `tag` 特性更换为其他元素。
- 过渡模式不可用，因为我们不再相互切换特有的元素。
- 内部元素 **总是需要** 提供唯一的 `key` 属性值。

## 过渡模式

一个离开过渡的时候另一个开始进入过渡。这是 `<transition>` 的默认行为 - 进入和离开同时发生。

同时生效的进入和离开的过渡不能满足所有要求，所以 Vue 提供了 **过渡模式**

- <font color=#e96900>`in-out`</font>：新元素先进行过渡，完成之后当前元素过渡离开。
- <font color=#e96900>`out-in`</font>：当前元素先进行过渡，完成之后新元素过渡进入。

# 组件

## 定义Vue组件

> 什么是组件： 组件的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我们需要什么样的功能，就可以去调用对应的组件即可；
>
> 组件化和模块化的不同：
>
> - 模块化： 是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一；
> - 组件化： 是从UI界面的角度进行划分的；前端的组件化，方便UI组件的重用；

## 全局组件的三种定义

1. 使用 Vue.extend 配合 Vue.component 方法：

   ```js
   // 1.1 使用 Vue.extend 来创建全局 Vue 组件
   var com1 = Vue.extend({
       // 通过 template 属性，指定了组件要展示的 HTML 结构
       template: '<h3>Vue.extend 创建的组件</h3>'
   })
   // 1.2 使用 Vue.component
   Vue.component('myCom1', com1)
   ```

   ```html
   <div id="app">
       <!-- 1.3 使用组件，将组件名称以 HTML 标签的形式引入（** 驼峰命名 改为 - 小写）到页面中 -->
       <my-com1></my-com1>
   </div>
   ```
   ```js
   // 另外一种 Vue.extend 和 Vue.component 的组合
   Vue.component('mycom1', Vue.extend({
       template: '<h3>Vue.extend 创建的组件</h3>'
   }))
   ```
   ```html
   <div id="app">
       <mycom1></mycom1>
   </div>
   ```

2. 直接使用 Vue.component 方法：

   ```js
   Vue.component('mycom2', {
       template: '<h3>Vue.component 创建的组件</h3>'
   })
   ```

3. 使用外部 template 模板创建：

   ```js
   // 使用外部 template 模板创建
   Vue.component('mycom3', {
       template: '#temp1'
   })
   ```

   ```html
   <div id="app">
       <mycom3></mycom3>
   </div>
   
   <!-- 在被控制的 #app 外面，使用 template 元素，定义组件的 HTML 模板结构 -->
   <template id="temp1">
       <div>
           <h3>Vue.component 创建的组件， 引用外部模板</h3>
       </div>
   </template>
   ```

> 注意： 组件中的DOM结构，有且只能有唯一的根元素（Root Element）来进行包裹！

## 使用 `components` 定义私有组件

1. 编写外部组件模板

   ```html
   <template id="temp2">
       <div>
           <h3>创建私有组件， 引用外部模板</h3>
       </div>
   </template>
   ```

2. 定义私有组件

   ```js
   var vm2 = new Vue({
       el: '#app2',
       components: {
           // 定义实例内部私有组件
           login: {
               template: '#temp2'
           }
       }
   })
   ```

3. 引入组件模板

   ```html
   <div id="app2">
       <login></login>
   </div>
   ```

## 动态组件

可以通过 Vue 的 `<component>` 元素加一个特殊的 `is` 特性来实现：

```html
<component :is="componentId"></component>
```

在上述示例中，`is` 属性中可以包括

- 已注册组件的名字，或
- 一个组件的选项对象

## 组件传递

### 父组件向子组件传值

> Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。我们能够在组件实例中访问这个值，就像访问 `data` 中的值一样

通过 Prop 向子组件传递数据

```html
<div id="app">
    <!-- 父组件在引用子组件时，通过 属性绑定(v-bind:) 的形式，把数据传递到子组件内部，使子组件使用 -->
    <com1 :pmsg="msg"></com1>
</div>
```

```js
var vm = new Vue({
    el: '#app',
    data: {
        msg: '父组件中的数据'
    },
    methods: {},
    components: {
        // 子级作用域
        com1: {
            data() {
                return {
                    // data 中的数据是其自身私有的， 可读可写
                }
            },
            // 将父组件传递过来的 pmsg 属性，通过 props 定义一下，使子组件像访问 data 一样访问这个值
            // props 是父组件传递过来的数据，只读
            props: ['pmsg'],
            template: '<h1>这是子组件 -- 访问父组件:{{pmsg}} </h1>'
        }
    }
})
```

### 父组件向子组件传方法

父级组件可以像处理 native DOM 事件一样通过 `v-on` 监听子组件实例的任意事件：

```html
<div id="app">
    <!-- 父组件向子组件传递方法，使用的是 事件绑定机制 (v-on) -->
    <!-- ** 传递的是方法的引用 => show，而非方法的结果: show() -->
    <com2 @pshow="show"></com2>
</div>
```

同时子组件可以通过调用内建的 <font color=#e96900>`$emit`</font> 方法 并传入事件名称来触发一个事件：

```html
<template id="temp1">
    <div>
        <h1 @click="cshow">一个子组件</h1>
    </div>
</template>
```

```js
var com2 = {
    template: '#temp1',
    methods: {
        cshow() {
            this.$emit('pshow')
        }
    },
}

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {
        show() {
            alert("父组件的方法")
        }
    },
    components: {
        // 定义子组件
        com2,
    }
})
```

### 父组件获取子组件的值和方法

<font color=#e96900>`ref`</font> 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 `$refs`对象上。如果用在子组件上，引用就指向组件实例：

```html
<div id="app">
    <temph2 ref="tempelem"></temph2>
</div>
```

```js
var temph2 = {
    template: '<h2>h2 中的模板组件</h2>',
    data() {
        return {
            msg: 'son msg'
        }
    },
    methods: {
        show() {
            console.log('son methods')
        }
    },
}

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {
        getElement() {
            // 在父组件中使用 $refs 获取注册引用信息
            console.log(this.$refs.tempelem.msg)        // ==> 获取子组件 data
            this.$refs.tempelem.show()                  // ==> 调用子组件方法
        }
    },
    components: {
        temph2,
    }
})
```

# 路由

## 什么是路由

>1. **后端路由**：对于普通的网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上对应的资源；
>2. **前端路由**：对于单页面应用程序来说，主要通过URL中的hash(#号[^2])来实现不同页面之间的切换，同时，hash有一个特点：HTTP请求中不会包含hash相关的内容；所以，单页面程序中的页面跳转主要用hash实现；
>3. 在单页面应用程序中，这种通过hash改变来切换页面的方式，称作前端路由（区别于后端路由）；

## 在 vue 中使用 vue-router

1. 导入 vue-router 组件类库：

   ```js
   <script src="../lib/vue-2.4.0.js"></script>
   <!-- 引入 vue-router 路由模块 -->
   <script src="../lib/vue-router-3.0.1.js"></script>
   ```

2. 使用 router-view 组件来显示匹配到的组件：

   ```html
   <div id="app">
       <router-view></router-view>
   </div>
   ```

3. 创建组件：

   ```js
   var login = {
       template: '<h1>login组件</h1>'
   }
   var register = {
       template: '<h1>register组件</h1>'
   }
   ```

4. 创建 router 实例：

   ```js
   // 当导入 vue-router 之后，在 window 全局对象中，就有了一个路由的构造函数 ==> VueRouter
   const router = new VueRouter({
       // 这个配置对象中的 route 表示[路由匹配规则]
       // route
       routes: [
           // 路由匹配规则数组
           // |-   每个路由匹配规则都是一个对象，这个规则对象必须包含两个属性：
           //      |-   属性 1: path 表示监听哪个路由链接地址
           //      |-   属性 2: component 表示展示 path 匹配到的对应组件的对象
           { path: '/login', component: login },
           { path: '/register', component: register }
       ]
   })
   ```

5. 加载 router 到根实例：

   ```js
   var vm = new Vue({
       el: '#app',
       data: {},
       methods: {},
       router: router // 将路由实例挂载到根实例中
   })
   ```

## 路由传参

1. 使用 `query` 获取参数

   ```html
   <div id="app">
       <router-link to="login?id=10&name=zs">登录</router-link>
       <router-view></router-view>
   </div>
   ```

   ```js
   var login = {
       // 通过 query 获取参数
       template: '<h1>login组件 --- {{$route.query.id}} --- {{$route.query.name}}</h1>'
   }
   ```

2. 使用 `params` 获取参数

   ```html
   <div id="app">
       <router-link to="/login/12/ls">登录</router-link>
       <router-view></router-view>
   </div>
   ```

   ```js
   var login = {
       // 使用 params 获取参数
       template: '<h1>login组件 --- {{$route.params.id}} --- {{$route.params.name}}</h1>'
   }
   ```

   ```js
   const router = new VueRouter({
       routes: [
           // :id 占位符，将来 / 后面跟的参数会被解析成 id ==> 使用 params 解析
           { path: '/login/:id/:name', component: login }
       ],
   })
   ```

## 子路由

使用 `children` 属性实现子路由

> 注意：子路由的 path 前面，不要带 `/` 否则永远以根路径开始请求，不方面去理解 URL 地址

```js
const router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                // 和 router-link 中的 to 对应
                // |-   /account/login ==> login
                // |-   /login ==> login (不建议使用)
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        },
    ]
})
```

```html
<div id="app">
    <router-link to="/account">Account</router-link>
    <router-view></router-view>
</div>

<template id="temp1">
    <div>
        <h1>用户登录组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>
```

```js
var account = {
    template: '#temp1'
}

var login = {
    template: '<h3>登录</h3>'
}

var register = {
    template: '<h3>注册</h3>'
}
```

# 计算属性和侦听器

## `watch` 、 `computed` 和 `methods` 之间的对比

> 1. `computed` 属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要用于数据计算操作；
> 2. `methods` 方法表示一个具体的操作，主要书写业务逻辑；
> 3. `watch` 一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；可以看作是 `computed` 和 `methods` 的结合体；

# webpack

## 什么是webpack?

webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具

## 初步使用webpack打包构建

1. 项目初始化，生成 package.json 

   ```powershell
   npm init -y
   ```

2. 构建 node_modules ，安装相关插件，如 JQuery

   ```powershell
   npm i jquery -S
   ```

3. 配置 webpack.config.js 文件指明打包模式

   > 开发者模式：
   > ```diff
   > mode: 'development'
   > ```
   > 发布模式：
   > ```diff
   > mode: 'production'
   > ```

   ```js
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
   ```

4. 通过终端命令进行打包

   - 指明打包文件

     ```powershell
     npx webpack ./src/main.js -o ./dist/bundle.js
     ```

   - 通过配置文件设置打包文件

     ```powershell
     webpack
     ```

## 实现自动打开浏览器、热更新和配置浏览器的默认端口号

方式1：

+ 修改 `package.json` 的 script 节点如下，其中 `--open` 表示自动打开浏览器，`--port 4321` 表示打开的端口号为 3000 ，`--hot` 表示启用浏览器热更新：
```js
"dev": "webpack-dev-server --hot --port 3000 --open"
```

方式2：

1. 修改 `webpack.config.js` 文件，新增 `devServer` 节点如下：
```js
devServer:{
    hot:true,
    open:true,
    port:3000
}
```
2. 在头部引入 `webpack` 模块：
```js
var webpack = require('webpack');
```
3. 在 `plugins` 节点下新增：
```js
new webpack.HotModuleReplacementPlugin()
```

## 使用 `html-webpack-plugin` 插件配置启动页面

由于使用 `--contentBase` 指令的过程比较繁琐，需要指定启动的目录，同时还需要修改index.html 中 script 标签的src属性，所以推荐大家使用 `html-webpack-plugin` 插件配置启动页面.

1. 运行 `npm i html-webpack-plugin -D` 安装到开发依赖

2. 修改 `webpack.config.js` 配置文件

   ```js
   const htmlWebpackPlugin = require('html-webpack-plugin')
   
   ...
   plugins: [
       new htmlWebpackPlugin({
           // 创建一个在内存中生成 HTML 页面
           template:path.join(__dirname, 'src/index.html'),//指定模板路径
           filename: 'index.html' // 指定生成页面名称
       })
   ]
   ```

3. 将 index.html 中 script 标签注释掉，因为 `html-webpack-plugin` 插件会自动把bundle.js 注入到 index.html 页面中！

## 使用webpack打包css文件

1. 运行 `npm i style-loader css-loader -D`

2. 修改 `webpack.config.js` 配置文件：

   > 在 webpack 的配置中 **loader** 有两个目标：
   >
   > 1. `test` 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
   > 2. `use` 属性，表示进行转换时，应该使用哪个 loader。

    ```js
   module: { // 用于配置所有的第三方模块加载器
       rules: [ // 所有第三方的匹配规则
           { test: /\.css$/, use: ['style-loader', 'css-loader'] }
       ]
   }
    ```

## 使用webpack处理css中的路径

1. 运行 `npm i url-loader file-loader -D`

2. 增加 `webpack.config.js` 中的 `module` 的 `rules` 属性

   ```js
   // 处理图片的 url 的 loader
   {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader'}
   ```

3. 可以通过 `limit` 指定进行 base64 编码的图片大小；只有小于指定字节（byte）的图片才会进行 base64 编码：

   ```js
   {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=55570'}
   ```

4. 可以设置图片打包名称

   ```js
   {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?name=[hash:8]-[name].[ext]'}
   ```

## 使用 `babel` 处理高级 JS 语法

1. 运行 `npm i babel-core babel-loader babel-plugin-transform-runtime -D` 安装babel的相关loader包

2. 运行 `npm i babel-preset-env babel-preset-stage-0 -D` 安装babel转换的语法

3. 在 `webpack.config.js` 中添加相关 loader 模块，其中需要注意的是，一定要把`node_modules` 文件夹添加到排除项：

   ```js
   { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
   ```

4. 在项目根目录中添加 `.babelrc` 文件，并修改这个配置文件如下：

   ```json
   {
       "presets":["env", "stage-0"],
       "plugins":["transform-runtime"]
   }
   ```

## 在 webpack 中使用 vue

引入 vue 项目依赖：`npm i vue -S`

### 导入完整版 Vue

方法1：

1. 在 main.js 中指明导入 vue.js 的路径

   ```js
   // 导入 vue 的包
   // ** 使用 import Vue from 'vue' 导入的 Vue 构造函数功能不完整，只提供了 runtime-only 的方式 (阉割版)
   import Vue from '../node_modules/vue/dist/vue'
   
   // ** 包的查找规则
   // 从 node_modules 中根据包名找到对应的文件夹，并在文件夹中找到一个叫做 package.json 的包的属性文件
   // package.json 文件中，有一个 main 属性 ==> 指定了包被加载时候的入口文件
   ```

方法2：

1. 在 main.js 中导入 vue

   ```js
   import Vue from 'vue'
   ```

2. 在 webpack.config.js 中配置 vue 执行文件

   ```js
   resolve: {
       alias: {
           // 设置 vue 导入时的包路径
           'vue$': 'vue/dist/vue.js'
       }
   }
   ```

### 导入 .vue 模板

1. 创建 .vue 模板

   ```vue
   <template>
       <div>
           <h1>这是使用 .vue 模板创建的组件</h1>
       </div>
   </template>
   
   <script>
   // 脚本
   </script>
   
   <style>
   /* 样式 */
   </style>
   ```

2. webpack 默认无法打包 .vue 文件，安装相关 loader ：`npm i vue-loader vue-template-compiler -D`

3. 在 webpack.config.js 中配置处理 .vue 的 loader，引入 loader 相关依赖

   ```js
   const VueLoaderPlugin = require('vue-loader/lib/plugin');
   
   plugins: [
       new VueLoaderPlugin()
   ],
   
   module: { // 用于配置所有的第三方模块加载器
       rules: [ 
           // 处理 .vue 文件的 loader
           { test: /\.vue$/, use: 'vue-loader' }
       ]
   }
   ```

4. 在 main.js 中配置 .vue 模板

   ```js
   // 导入 .vue 模板对象
   import login from './template/login.vue'
   
   var vm = new Vue({
       el: '#app',
       // 使用 render 函数，将 el 所指的元素用 .vue 模板所代替
       render: function(createElements) {
           return createElements(login)
       },
       // 简写
       render: c => c(login)
   })
   ```

### ES6中语法使用总结

1. 使用 `export default` 和 `export` 向外暴露模块中的成员; 对应 ES5 中的 `module.exports` 和 `exports`

   - 暴露 
     ```js
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
     ```

   - 接收

     ```js
     import info, { title as t, content } from './test'
     console.log(info)
     console.log(t + ' -- ' + content)
     ```

2. 使用 `import ** from **` 和 `import '路径' ` 还有 `import {a, b} from '模块标识' ` 导入其他模块

3. 使用箭头函数：`(a, b)=> { return a-b; }`

**注**

[^1]: truthy 不是 `true`，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 的解释。 
[^2]: `#` 后的内容不会被发送请求，详见 [URL中的hash（井号）](http://www.cnblogs.com/joyho/articles/4430148.html) 的解释

