## 9. 浏览器

### 1. 浏览器 `setTimeout` 怎么判断 5s，事件堆栈放在哪里

在现有浏览器环境中，Javascript 执行引擎是单线程的，主线程的语句和方法，会阻塞定时任务的运行，在 Javascript 执行引擎之外，存在一个任务队列，

当在代码中调用 `setTimeout()`方法时，`注册的延时方法会挂到浏览器内核其他模块处理，当延时方法到达触发条件，即到达设置的延时时间时，该模块再将要执行的方法添加至该模块的任务队列中`。

这一过程与执行引擎主线程独立，执行引擎在主线程方法执行完毕，到达空闲状态时，才会从该模块的任务队列中顺序提取任务来执行，这期间的时间，可能大于注册任务时设置的延时时间；浏览器在空闲状态下，会不断的尝试从模块的任务队列中提取任务，这称为`事件循环模型`。

`基本类型的数据存储到栈内存（stack）中，引用数据类型存储到堆内存(heap)中；[对象、数组，函数]`

### 2. 事件循环 event loop（事件轮询）

浏览器的 task（宏任务）执行顺序在 html#event-loops 里面有讲就不翻译了 常见的 task（宏任务） 比如：setTimeout、setInterval、script（整体代码）、 I/O 操作、UI 渲染等。 常见的 micro-task 比如: new Promise().then(回调)、Object.observe、MutationObserver(html5 新特性) 等。

拓展：js 单线程，单线程就是只能同时只做一件事，两段 js 不能同时执行，避免 DOM 渲染冲突

### 3. 浏览器垃圾回收算法

引用计数（现代浏览器不再使用）

标记清除（常用）,算法由以下几步组成：

1、垃圾回收器创建了一个“roots”列表。roots 通常是代码中全局变量的引用。JavaScript 中，“window” 对象是一个全局变量，被当作 root 。window 对象总是存在，因此垃圾回收器可以检查它和它的所有子对象是否存在（即不是垃圾）；

2、所有的 roots 被检查和标记为激活（即不是垃圾）。所有的子对象也被递归地检查。从 root 开始的所有对象如果是可达的，它就不被当作垃圾。

3、所有未被标记的内存会被当做垃圾，收集器现在可以释放内存，归还给操作系统了。

#### 内存泄漏识别方法

打开开发者工具，选择 Memory

在右侧的 Select profiling type 字段里面勾选 timeline

点击左上角的录制按钮。

在页面上进行各种操作，模拟用户的使用情况。

一段时间后，点击左上角的 stop 按钮，面板上就会显示这段时间的内存占用情况。

#### 四种常见的 JS 内存泄漏

1、意外的全局变量,未定义的变量会在全局对象创建一个新变量。在 JavaScript 文件头部加上 'use strict'，使用严格模式避免意外的全局变量，此时上例中的 this 指向 undefined。如果必须使用全局变量存储大量数据时，确保用完以后把它设置为 null 或者重新定义。

2、被遗忘的计时器或回调函数。代的浏览器（包括 IE 和 Microsoft Edge）使用了更先进的垃圾回收算法（标记清除），已经可以正确检测和处理循环引用了。即回收节点内存时，不必非要调用 removeEventListener 了。

3、脱离 DOM 的引用。如果把 DOM 存成字典（JSON 键值对）或者数组，此时，同样的 DOM 元素存在两个引用：一个在 DOM 树中，另一个在字典中。那么将来需要把两个引用都清除。

4、闭包。闭包的关键是匿名函数可以访问父级作用域的变量。

#### 从内存来看 null 和 undefined 本质的区别是什么？

给一个全局变量赋值为 null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为 null，或者局部变量赋值为 null,相当于给这个属性分配了一块空的内存，然后值为 null， JS 会回收全局变量为 null 的对象。

给一个全局变量赋值为 undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为 undefined，说明这个值为空值

### 4. 栈内存、堆内存理解

```js
var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

a.x // --> undefined
b.x // --> {n: 2}
```

### 5.跨域解决方案/jsonp 原理解析 [链接](https://segmentfault.com/a/1190000011145364)

- 通过 jsonp 跨域
- document.domain + iframe 跨域
- location.hash + iframe
- window.name + iframe 跨域
- postMessage 跨域
- 跨域资源共享（CORS）普通跨域请求：只服务端设置 Access-Control-Allow-Origin 即可，前端无须设置，若要带 cookie 请求：前后端都需要设置。
- nginx 代理跨域
- nodejs 中间件代理跨域
- WebSocket 协议跨域

### 6.浏览器渲染过程

浏览器将获取的 HTML 文档并解析成 DOM 树。

处理 CSS 标记，构成层叠样式表模型 CSSOM(CSS Object Model)。

将 DOM 和 CSSOM 合并为渲染树(rendering tree)将会被创建，代表一系列将被渲染的对象。

渲染树的每个元素包含的内容都是计算过的，它被称之为布局 layout。浏览器使用一种流式处理的方法，只需要一次 pass 绘制操作就可以布局所有的元素。

将渲染树的各个节点绘制到屏幕上，这一步被称为绘制 painting.

### 7. onload 和 DOMContentLoaded 的区别，推荐使用 `DOMContentLoaded`

window.onload 加载完所有资源包括 dom 图片 css 视频 只执行一次,多个 onload 后面的覆盖前面的

jq 的 ready 文档等 dom 结构加载完执行，执行多次，从上到下执行，相当于 DOMContentLoaded，DOMContentLoaded DOM 渲染完即可，此时图片、视频可能还没有加载完

ie8 点击动作 js 的执行顺序为由下而上

```js
window.addEventListener('load',()=>{}) window.onload=function(){}
window.addEventListener('DOMContentLoaded',()=>{})
```
