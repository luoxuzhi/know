(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{538:function(t,a,e){"use strict";e.r(a);var r=e(53),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_4-svg-蒙版动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-svg-蒙版动画"}},[t._v("#")]),t._v(" 4. SVG 蒙版动画")]),t._v(" "),e("p",[t._v("这一章节来讲讲 SVG 中的蒙版(mask)也可以叫遮罩和裁剪路径(clip-path)在制作动画中的一些使用方法。为了行文方便，下面就统称蒙版和裁剪。")]),t._v(" "),e("h2",{attrs:{id:"裁剪和蒙版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#裁剪和蒙版"}},[t._v("#")]),t._v(" 裁剪和蒙版")]),t._v(" "),e("h3",{attrs:{id:"共同点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共同点"}},[t._v("#")]),t._v(" 共同点")]),t._v(" "),e("p",[t._v("首先它们的共同点都是用来隐藏元素的一些部分、显示其他部分的。也就是在蒙版或者是裁剪定义的区域内是可见的，在区域外是不可见的。")]),t._v(" "),e("h3",{attrs:{id:"区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),e("p",[t._v("蒙版使用的是图像，裁剪使用的是路径。")]),t._v(" "),e("p",[t._v("蒙版是一种容器，它定义了一组图形并将它们作为半透明的媒介，可以用来组合前景对象和背景。")]),t._v(" "),e("p",[t._v("裁剪路径和其它的蒙版一个重要的区别就是：裁剪路径覆盖的对象要么就是全透明(可见的，位于裁剪路径内部)，要么就是全不透明(不可见，位于裁剪路径外部)。而蒙版可以指定不同位置的透明度，可以使用渐变等属性来定义。")]),t._v(" "),e("p",[t._v("这么说可能还不是很明白，下面用两个简单的实例来解释下它们的区别：")]),t._v(" "),e("h3",{attrs:{id:"裁剪实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#裁剪实例"}},[t._v("#")]),t._v(" 裁剪实例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <clipPath id="cut-off-bottom">\n      <rect x="0" y="0" width="200" height="100" />\n    </clipPath>\n  </defs>\n  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />\n</svg>\n\n')])])]),e("p",[t._v("在 SVG 中我们使用"),e("strong",[t._v("clip-path")]),t._v("元素来表示裁剪路径。")]),t._v(" "),e("p",[t._v("在上面的代码中，我们使用 circle 元素定义来一个半径为 100 的圆形。然后使用 clip-path 属性定义了一个宽为 200，高为 100 的 rect 元素矩形。这里要注意的一点的是，clipPath 元素经常放在一个 defs 元素内。")]),t._v(" "),e("p",[t._v("然后我们在 circle 元素中使用 "),e("strong",[t._v("clip-path")]),t._v(" 属性来引用已经定义好的 ID 为 cut-off-bottom 的裁剪路径。因为裁剪路径的宽和高分别为 200 和 100，而圆圈的直径是 200，而圆圈的下半部分因为没有在裁剪路径的范围内，所以最终呈现的效果是圆圈的下半部分消失了，如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ec4e2f31ecc0?w=430&h=258&f=png&s=5402",alt:""}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/janily/pen/gBLXKV",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码演示地址"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"蒙版实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#蒙版实例"}},[t._v("#")]),t._v(" 蒙版实例")]),t._v(" "),e("p",[t._v("在 SVG 中，使用 "),e("strong",[t._v("mask")]),t._v(" 元素来表示蒙版。上面说过，蒙版可以指定不同位置的透明度，可以使用渐变等属性来定义蒙版。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\n  <defs>\n    <linearGradient id="Gradient">\n      <stop offset="0" stop-color="white" stop-opacity="0" />\n      <stop offset="1" stop-color="white" stop-opacity="1" />\n    </linearGradient>\n    <mask id="Mask">\n      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />\n    </mask>\n  </defs>\n  <rect x="0" y="0" width="200" height="200" fill="green" />\n  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />\n</svg>\n\n')])])]),e("p",[t._v("上面的代码中，我们定义了一个 mask 元素，它的内容是一个单一的 rect 元素，它填充了一个透明到白色的渐变。作为红色矩形继承 mark 内容的 alpha 值（透明度）的结果，所以我们看到一个从绿色到红色渐变的输出：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ec5b9db06250?w=536&h=334&f=png&s=6007",alt:""}})]),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/janily/pen/NObwBx",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码演示地址"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("一图胜千言，来张图总结下裁剪和蒙版的区别：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ec661fcef5e6?w=960&h=620&f=jpeg&s=91451",alt:""}})]),t._v(" "),e("p",[t._v("ok，裁剪和蒙版的基本知识就这些了，下面我们来看看如何使用裁剪和蒙版来制作一些有趣的动画效果。")]),t._v(" "),e("h2",{attrs:{id:"裁剪动画效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#裁剪动画效果"}},[t._v("#")]),t._v(" 裁剪动画效果")]),t._v(" "),e("p",[t._v("第一个动画效果是用 SVG 中的裁剪来做一个如下图所示的动画效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ec7674d777dc?w=1252&h=402&f=gif&s=1063814",alt:""}})]),t._v(" "),e("p",[t._v("原理其实很简单，我们在 SVG 中先定义一个 clip-path 元素，并且是引用了一个带单个 circle 元素的 clipPath 元素，然后在 SVG 中使用 image 元素来引入图片并且使用 clip-path 属性引用我们定义的 clip-path 元素。这样初始的时候，图片只会显示我们定义好里面的部分，其余部分不可见。代码如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<svg viewBox="0 0 1400 800">\n<title>Animated clip-path SVG</title>\n<defs>\n<clipPath id="cd-image-1">\n<circle id="cd-circle-1" cx="110" cy="400" r="60"/>\n</clipPath>\n</defs>\n<image height=\'800px\' width="1400px" clip-path="url(#cd-image-1)" xlink:href="img.jpg"></image>\n</svg>\n\n')])])]),e("p",[t._v("具体到我们这个实例中就是，图片初始的时候只会显示半径为 60 的这个区域里，如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ec854003be9e?w=692&h=306&f=png&s=26889",alt:""}})]),t._v(" "),e("p",[t._v("那怎么让它动起来呢？")]),t._v(" "),e("p",[t._v("其实就是动态改变 clip-path 元素中 circle 元素的半径的值即 r 的值。我们这里使用的是 CSS3 中的 animation 方法来做的，点击图片区域的时候添加一个类来改变 clip-path 中 circle 元素的 r 的值来做到的，代码非常简单如下图所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".visible #cd-image-1 circle {\n    animation: visible-clippath 1s linear forwards;\n}\n@keyframes visible-clippath {\n    to {\n    r:1364;\n    }\n} \n\n")])])]),e("p",[t._v("有没有觉得很简单，简单的几行代码就可以做出这样有趣的动画效果。")]),t._v(" "),e("p",[t._v("详细的代码可以查看"),e("a",{attrs:{href:"https://codepen.io/janily/pen/jeLoyr",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线的地址来"),e("OutboundLink")],1),t._v("查看。")]),t._v(" "),e("p",[t._v("上面这个只是简单的实例，充分发挥想象力，我们还可以做出更有趣的动画效果。")]),t._v(" "),e("h2",{attrs:{id:"蒙版动画实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#蒙版动画实战"}},[t._v("#")]),t._v(" 蒙版动画实战")]),t._v(" "),e("h3",{attrs:{id:"手写文字动画效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手写文字动画效果"}},[t._v("#")]),t._v(" 手写文字动画效果")]),t._v(" "),e("p",[t._v("下面来看下第一个蒙版动画实例，是一个手写文字动画，如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ecb1daf69187?w=752&h=306&f=gif&s=42289",alt:""}})]),t._v(" "),e("p",[t._v("这个效果是蒙版和 path 动画相结合使用来实现的，至于 path 动画这里就不细说了，可以看看上一篇 CSS 动画实战教程，里面有详细的说明。")]),t._v(" "),e("p",[t._v("首先在 AI 中用文字工具选择适当的字体写下你想写的文字，然后选择文字菜单中的创建轮廓命令把文字转化为路径(path)元素导出为 path 数据：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ed49b6f6c9ea?w=1258&h=828&f=png&s=344381",alt:""}})]),t._v(" "),e("p",[t._v("现在转化为了 path 元素，那怎么让它一笔一笔写出来呢？")]),t._v(" "),e("p",[t._v("你也许觉得现在不都导出了 path 元素了么，直接使用 stroke-dashoffset 和 stroke-dasharray 来做动画不就行了不，那就太天真了。")]),t._v(" "),e("p",[t._v("因为我们的文字是直接转换为 path 元素的，不能控制它的起始位置，直接来使用它的 path 来做动画效果的话，就不能制作出从左到右一笔一笔写出来的动画效果，这样效果就不是很理想。所以我们还得用钢笔工具一笔一笔从左到右照着文字的轮廓勾画出字的路径，然后导出为 path 元素。如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ed5cf06e63bc?w=1270&h=770&f=png&s=119828",alt:""}})]),t._v(" "),e("p",[t._v("如上图所示，我们使用了钢笔工具按照图中文字的从左到右重新勾画出了新的文字路径。")]),t._v(" "),e("p",[t._v("然后把它定义在 mask 中，使用 stroke-dashoffset 和 stroke-dasharray 来制作出动画效果。")]),t._v(" "),e("p",[t._v("代码如下所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ed9df1dda7e1?w=1226&h=898&f=png&s=317213",alt:""}})]),t._v(" "),e("p",[t._v("从代码中可以看到，我们把重新勾画得到的文字路径定义在 id 为 mymask 的蒙版中，然后在下面的文字路径组中引用我们定义好的蒙版，")]),t._v(" "),e("p",[t._v("然后使用 CSS3 的 animation 来操作 stroke-dasharray 和 stroke-dashoffset 就可以实现一个文字书写的动画效果，这就非常的简单了")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/janily/pen/WYPPPo",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码演示地址"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ee77d2f312d3?w=752&h=306&f=gif&s=42289",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"svg-ai-源文件下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svg-ai-源文件下载"}},[t._v("#")]),t._v(" SVG AI 源文件下载：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://attachments-cdn.shimo.im/Ag0LDgPYagUXX4s9/tony.ai",target:"_blank",rel:"noopener noreferrer"}},[t._v("tony.ai"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"渐变显示文字动画效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渐变显示文字动画效果"}},[t._v("#")]),t._v(" 渐变显示文字动画效果")]),t._v(" "),e("p",[t._v("由于蒙版可以允许使用渐变等属性来定义透明区域，利用这一特性可以制作出渐变显示文字的动画效果。如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/2/1676ebf9ec5162bf?w=879&h=491&f=gif&s=650792",alt:"图片"}})]),t._v(" "),e("p",[t._v("先来定义一个矩形并引用一个白色有透明度渐变的蒙版，代码如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 300" version="1.1">\n  <defs>\n    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" gradientTransform="rotate(0)" x2="800" y2="0">\n      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"/>\n      <stop offset="0.25" stop-color="#FFFFFF" stop-opacity="0.25"/>\n      <stop offset="1" stop-color="#FFFFFF" stop-opacity="1"/>\n    </linearGradient>\n    <mask id="mask" maskUnits="userSpaceOnUse">\n      <rect width="800" height="300" fill="url(#gradient)"/>\n    </mask>\n    <text id="txt" x="400" y="150" font-family="Arial Black" font-size="60" text-anchor="middle">ISUX AWESOME</text>\n  </defs>\n  <use xlink:href="#txt" fill="#FFDD00" mask="url(#mask)"/>\n  </svg>\n\n')])])]),e("p",[t._v("然后在文字元素中引用这个蒙版，并且动态改变渐变的 transform 属性中的 rotate 值，就可以得到我们上面的这种渐变显示文字的动画效果。这里我使用了一点点 js(基于 tweenmax 这个库的技术) 来控制 rotate 的值，代码如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 循环播放动画\n  var tl = new TimelineMax({\n    repeat: -1\n  });\n\n  // 获取svg中渐变的transform属性\n  var gradient      = document.getElementById('gradient'),\n      gradient_attr = gradient.getAttribute('gradientTransform');\n\n  // 改变渐变transform的rotate属性\n  for(var i = 0, l = 360; i <= l; i++) {\n    tl.to(gradient, 0.01, {\n      attr: {\n        gradientTransform: 'rotate(' + -i + ')'\n      },\n      ease: Linear.easeInOut\n    })\n  }\n\n")])])]),e("p",[t._v("轻松的就实现了渐变显示文字的动画效果。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://codepen.io/janily/pen/aQXXMj",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码演示地址"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("OK，SVG 的蒙版动画大概就这些了。SVG 蒙版的使用场景远不止如此，只要发挥你的想象力，完全可以做出更加有趣的动画效果。")]),t._v(" "),e("p",[t._v("这里推荐一些使用 SVG 的网站，来"),e("a",{attrs:{href:"http://www.awwwards.com/websites/svg/",target:"_blank",rel:"noopener noreferrer"}},[t._v("看看 SVG 一些脑洞大开的玩法"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);a.default=s.exports}}]);