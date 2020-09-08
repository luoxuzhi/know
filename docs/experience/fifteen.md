## 15. 杂记

### 1. Class 和普通构造函数有何区别？

a. typeof Class // function

b.继承的写法不一样，class 使用 extend，es5 使用原型 `A.prototype=new B()`，Class 实现继承更加易读，易理解

c. Class 在语法上更加贴合面向对象的写法

d. 更易于写 java 等后端语言的使用

e.本质还是语法糖，使用 prototype

### 2. es6 其他常用功能

let/const、多行字符串/模板变量、解构赋值、函数默认参数、箭头函数、块级作用域

### 3. 原型的实际应用例子

jquery 如何使用原型，$.css $.html css,html 都是原型上面的方法

原型的扩展性：jquery 插件的扩展性、Vue 的扩展性

### 4. async await 在 generator 的基础上做的优化，区别

a. async 内置执行器。Generator 函数的执行必须靠执行器，需要调用 next() 方法，或者用 co 模块；而 async 函数自带执行器。async 函数的执行与普通函数一模一样，只要一行。

b. 更好的语义。async 和 await 比起星号和 yield，语义更清楚。

c. 更广的适用性。co 模块约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

d. async 返回值是 Promise，可以用 then 方法指定下一步的操作。比 Generator 函数的返回值是 Iterator 对象方便

### 5. var、let 和 const 区别的实现原理是什么（声明过程，内存分配，和变量提升）

一.声明过程
var：遇到有 var 的作用域，在任何语句执行前都已经完成了声明和初始化，也就是变量提升而且拿到 undefined 的原因由来。

function： 声明、初始化、赋值一开始就全部完成，所以函数的变量提升优先级更高

let：解析器进入一个块级作用域，发现 let 关键字，变量只是先完成声明，并没有到初始化那一步。此时如果在此作用域提前访问，则报错 xx is not defined，这就是暂时性死区的由来。等到解析到有 let 那一行的时候，才会进入初始化阶段。如果 let 的那一行是赋值操作，则初始化和赋值同时进行，const、class 都是同 let 一样的道理。

对比于 var，let、const 只是解耦了声明和初始化的过程，var 是在任何语句执行前都已经完成了声明和初始化，let、const 仅仅是在任何语句执行前只完成了声明。

二.内存分配 var，会直接在栈内存里预分配内存空间，然后等到实际语句执行的时候，再存储对应的变量，如果传的是引用类型，那么会在堆内存里开辟一个内存空间存储实际内容，栈内存会存储一个指向堆内存的指针

let，是不会在栈内存里预分配内存空间，而且在栈内存分配变量时，做一个检查，如果已经有相同变量名存在就会报错

const，也不会预分配内存空间，在栈内存分配变量时也会做同样的检查。不过 const 存储的变量是不可修改的，对于基本类型来说你无法修改定义的值，对于引用类型来说你无法修改栈内存里分配的指针，但是你可以修改指针指向的对象里面的属性

三.变量提升 let const 和 var 三者其实会存在变量提升

let 只是创建过程提升，初始化过程并没有提升，所以会产生暂时性死区。 var 的创建和初始化过程都提升了，所以在赋值前访问会得到 undefined function 的创建、初始化、赋值都被提升了

### 6. 性能优化有哪些方向

打包减少文件大小(用 Happypack 来加速代码构建，dll，uglify 优化)、EventLoop 异步更新、浏览器缓存原理及最佳设置、避免重绘和回流、cdn 网络传输、较少 dom 操作、节流防抖等

### 7. 脚手架改造加了哪些功能

`CopyWebpackPlugin`/`GenerateAssetPlugin`/`HappyPack`开启多线程打包

### 8. jQuery 怎么解决地域回调

Jquery 有延迟对象`$.Deferred()`，简单封装`Defered`使得用法类似`promise`，类似`Promise`

### 9. 酷炫的 css 特性

box-reflect、多列布局 column-count: 5;-webkit-box-reflect

### 10. html meta 用法

chartset name(title、description、keywords) http-equiv

### 11. nginx 配置某台机器访问特定的文件夹

gzip、location、proxy_pass、proxy_set_header、allow、deny

### 12. React 和 Vue 区别

共同点：
组件化、都是数据驱动视图

本质区别：
Vue--本质是 MVVM 框架，由 MVC 发展而来

React--本质是前端组件化框架，由后端组件化发展而来

Vue 逻辑和 html 模板分离、React 中 JavaScript 和模板混在一起，React 本身是组件化。