## Anime SVG Morphing 动画

### Morphing 动画

什么是 Morphing 动画，先来看下这个动图：

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793db68e006e48?w=607&h=403&f=gif&s=1015579)

简而言之，就是不同形状之间能平滑的转换。这个用 SVG 来做再适合不过了，因为 SVG 本身的形状就是有各种不同坐标之间的线段绘制而成的。从形状到另外一个形状的转化就是移动坐标点而已。

具体到 Anime 中，该如何实现这种 Morphing 动画呢？我们先通过一个简单的实例来了解下在 Anime 中实现 Morphing 动画的方法。

## Morphing 动画实战

先来实现下面这个简单的动画效果：

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793dba4d9837a6?w=1028&h=638&f=gif&s=646622)

从上图我们可以看到这个6边形的一个角在做形状的变化，简单的来说其实就是移动其中一个角的坐标而已，这个用 Anime 来处理再简单不过来。

### Anime Morphing 动画注意事项

在开始编码之前先要提醒一点的是，使用 Anime 做 Morphing 动效要保持形状与形状之间的控制点的数量是一致的。比如说，一个形状有3个控制点，另外一个形状有5个控制点，如果使用 Anime 来做动效的画，那形状与形状之间的变化就会非常的不自然，而且不会出现预期的效果。我们来看一个实际的例子。

我们先在 AI 中绘制一个6边形（绘制形状，AI 等设计工具都默认提供多边形的绘制方法）：

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793dbe50c50b72?w=1303&h=802&f=png&s=88349)

从图中可以看出6边形有6个控制点组成，得到的 SVG 代码是：

```
<polygon class="st0" points="394.1,239.7 300.5,293.8 206.8,239.7 206.8,131.6 300.4,77.5 394.1,131.5 "/>

```

然后再绘制一个5角形：

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793dbe09e86db7?w=1295&h=788&f=png&s=89738)

5角形代码如下：

```
<polygon class="st0" points="380.1,287.1 307.4,251 236.5,290.5 248.3,210.2 188.9,155 268.9,141.4 303.1,67.8 
	340.7,139.7 421.3,149.5 364.5,207.5 "/>

```

可以看到5角形有10个控制点组成，那如果这两个形状之间用 Anime 来开发 Morphing 效果会怎么样呢？

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793dba9086ef93?w=1028&h=638&f=gif&s=570873)

可以看到并没有出现预期的从6边形变化到5角形的动画效果。所以在制作 Morphing 动画效果的时候，我们需要保证形状与形状之间的控制点一致，这样才会实现预期的动画效果。

### 动画实战

再回到我们开头要实现的那个 Morphing 动画效果。

首先依然是在 AI 工具中先绘制一个6边形，如下图所示：

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793db97c36f4fa?w=1240&h=830&f=gif&s=4391727)

绘制好后，得到它的 SVG 代码，先复制粘贴到编辑器中。

然后再使用路径选择器工具，选择一个控制点，对它进行拖拽，得到我们想要的图形就可以了，再导出 SVG 得到它的坐标点：

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793dbe375f9aca?w=1240&h=830&f=gif&s=5391385)

按照上面图中演示的步骤那样操作，我们可以依次得到每个形状的坐标数据：

```
    <polygon id="XMLID_1_" class="st0" points="420.7,273.7 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5 "/>
	<polygon id="XMLID_1_" class="st0" points="475.7,313 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5 "/>
	<polygon id="XMLID_1_" class="st0" points="515,240.3 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5 "/>
	<polygon id="XMLID_1_" class="st0" points="454.3,357 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5 "/>
	<polygon id="XMLID_1_" class="st0" points="491.7,309 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5 "/>

```

得到数据后，接下来的编码就简单了。

HTML：

```
<svg version="1.1" x="0px" y="0px"
	 width="600" height="400" viewBox="0 0 600 400" style="enable-background:new 0 0 600 400;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;}
</style>
<polygon id="XMLID_1_" class="st0" points="491.7,309 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5 "/>
</svg>

```

初始化的时候要显示一个默认的形状，我们这里显示的是6边形，所以只需要把6边形的代码放到 HTML 中就可以了，其它几个形状在 Anime 中处理就可以。

然后是 Anime 代码：

```
var morphing = anime({
  targets: 'polygon',
  points: [
    { value: '420.7,273.7 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5' },
    { value: '475.7,313 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5' },
    { value: '515,240.3 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5 ' },
    { value: '454.3,357 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5' },
    { value: '491.7,309 309.3,337.2 198.7,272.5 199.3,144.3 310.7,80.8 421.3,145.5' }
  ],
  easing: 'linear',
  duration: 4000,
  direction: 'alternate',
  loop: true
});

```

从代码中可以看到，我们这里要操作的属性是 polygon 中的 points 属性，并且把我们的几组形状的坐标点作为一个数组对象传给 points 属性，Anime会自动来根据形状的坐标点来进行处理，实现形状与形状之间的 Morphing 动画效果。

通过上面这个实例，可以看出 Anime 来实现 Morphing 动画效果还是很简单的，下面我们再来使用它实现一个稍微复杂点的 Morphing 动画效果。

![图片](https://user-gold-cdn.xitu.io/2018/12/10/16793dbc3391cd02?w=471&h=142&f=gif&s=78057)

这个效果除了有 Morphing 效果之外，还有一个颜色的变化，使用 Anime 同样可以轻松做到。

首先当然是准备这两个图形的 SVG 代码，SVG 准备好后，接下来就简单了，先上 HTML 代码，初始化显示的 F 这个字母，只需要把 F 字母的 SVG 代码放到 HTML 中就可以了：

```
<svg class="social"
     xmlns="http://www.w3.org/2000/svg"
     width="100"
     height="100"
     viewBox="0 0 100 100">
  <path class="path"
        style="fill:#3b5998;fill-rule:evenodd;stroke:#3b5998;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
        d="m 41.416254,90 c -0.327378,-7.4702 0.20833,-32.7284 0,-39.901 -5.386902,-0.2083 -4.521603,0.3274 -9.848987,0 0.20833,-5.50595 0.36436,-7.66666 0.126269,-13.32142 4.646472,0.0181 3.439989,-0.009 9.848987,-0.1894 0.09586,-3.7736 0.133082,-3.0791 0.126269,-7.38674 0.18259,-3.73943 -0.486609,-10.54308 4.293149,-14.96288 4.779758,-4.4198 13.606811,-3.64808 22.223356,-3.53554 -0.04417,5.73754 -0.03936,9.37986 0,12.87945 -5.049924,0.46388 -7.309188,-0.33689 -10.85914,1.26269 -1.403378,3.17794 -1.569601,4.80531 -1.262691,11.93242 3.147964,-0.13336 8.201788,-0.1378 12.626907,0 -0.995158,6.00899 -0.948285,7.62376 -1.767767,13.06882 -3.676625,0.088 -5.605721,-0.1488 -11.111678,0 -0.148814,6.756 0.357147,33.0107 0,40.1536 -6.428576,0.1786 -8.174438,-0.03 -14.394674,0 z" />
</svg>

```

下面开始 Anime 的编码工作。

首先声明一个时间轴：

```
var socialTimeline = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });

```

动画是否自动播放，是否循环播放等都提前在时间轴中定义好。

根据上一个效果的学习，依样画葫芦，这里我们使用的 path 元素，所以需要改变 path 元素中 d 的值来实现 Morphing 效果：

```
socialTimeline
  .add({
    targets: '.path',
    d: {
      value: [
      "m 41.416254,90 c -0.327378,-7.4702 0.20833,-32.7284 0,-39.901 -5.386902,-0.2083 -4.521603,0.3274 -9.848987,0 0.20833,-5.50595 0.36436,-7.66666 0.126269,-13.32142 4.646472,0.0181 3.439989,-0.009 9.848987,-0.1894 0.09586,-3.7736 0.133082,-3.0791 0.126269,-7.38674 0.18259,-3.73943 -0.486609,-10.54308 4.293149,-14.96288 4.779758,-4.4198 13.606811,-3.64808 22.223356,-3.53554 -0.04417,5.73754 -0.03936,9.37986 0,12.87945 -5.049924,0.46388 -7.309188,-0.33689 -10.85914,1.26269 -1.403378,3.17794 -1.569601,4.80531 -1.262691,11.93242 3.147964,-0.13336 8.201788,-0.1378 12.626907,0 -0.995158,6.00899 -0.948285,7.62376 -1.767767,13.06882 -3.676625,0.088 -5.605721,-0.1488 -11.111678,0 -0.148814,6.756 0.357147,33.0107 0,40.1536 -6.428576,0.1786 -8.174438,-0.03 -14.394674,0 z",
      "m 10.44335,90 c 11.073313,0.3952 19.483106,-1.8358 23.901837,-7.1603 -7.9736,-1.4292 -11.832311,-4.1933 -15.078321,-11.0837 3.459698,0.8219 5.795894,0.6358 7.606781,-0.607 -7.19593,-1.719 -12.734543,-6.7971 -13.741664,-15.836 2.766355,1.55307 5.466848,2.66623 7.828682,2.0203 -4.336544,-2.92911 -9.838998,-10.47636 -5.555839,-22.47589 8.400675,11.87052 23.824269,17.67568 33.840111,17.67767 -0.936406,-9.74688 5.88057,-19.46521 15.302849,-19.97853 8.13118,-0.50719 10.57457,4.01944 12.476346,4.82624 3.644547,0.13419 7.393301,-1.74401 10.354063,-3.53553 -1.380842,4.47157 -5.06769,5.62903 -6.313453,8.58629 5.42317,0.41513 5.891376,-1.53111 8.333758,-2.0203 -2.071414,3.75017 -5.393863,5.00034 -7.323606,8.08122 -1.633654,16.12573 -5.16049,27.57123 -14.647212,36.36553 -13.825764,11.3764 -34.755458,17.369 -56.984332,5.14 z"
      ],
      duration: 700,
      delay: 200,
      easing: 'easeInOutQuart'
    },

```

Morphing 之后是颜色的变化这个更简单了：

```
fill: {
      value: ['#3b5998', '#4099ff'],
      duration: 700,
      delay: 200,
      easing: 'easeInOutQuart'
},

```

这里颜色的值，是一个数组。在执行的时候，anime.js会自动读取数组里颜色的值，填充到路径中去，从而实现两个形状填充颜色的动画。

[代码演示地址](https://codepen.io/janily/pen/XoWaZa)

OK，Anime 在 SVG 动画中的应用就讲到这了，同时，我们这一SVG动画实战系列的教程也结束了，正所谓工欲善其事必先利其器，有了趁手的工具，能做出什么样的东西，就靠我们发挥想象力了。

整个SVG动画的应用还有很多，我这里也是抛砖引玉一下，肯定还有讲的不周到的地方，还请大家多多指教，一起学习，共同成长。