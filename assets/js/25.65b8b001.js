(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{448:function(s,t,a){"use strict";a.r(t);var e=a(53),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_4-正则的扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-正则的扩展"}},[s._v("#")]),s._v(" 4.正则的扩展")]),s._v(" "),a("ol",[a("li",[s._v("RegExp构造函数")])]),s._v(" "),a("p",[s._v("RegExp构造函数第一个参数是一个正则对象，那么可以使用"),a("strong",[s._v("第二个参数")]),s._v("指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" newRegExp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("xyz")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("ig")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'i'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// /xyz/i")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("字符串的正则方法")])]),s._v(" "),a("p",[s._v("字符串对象共有4个方法，可以使用正则表达式："),a("code",[s._v("match()")]),s._v("、"),a("code",[s._v("replace()")]),s._v("、"),a("code",[s._v("search()")]),s._v("和"),a("code",[s._v("split()")]),s._v("。")]),s._v(" "),a("p",[s._v("search返回开始匹配的位置")]),s._v(" "),a("p",[s._v("3.u修饰符")]),s._v(" "),a("ul",[a("li",[s._v("点字符")])]),s._v(" "),a("p",[s._v("点"),a("code",[s._v(".")]),s._v("字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于"),a("code",[s._v("0xFFFF")]),s._v("的Unicode字符，点字符不能识别，必须加上"),a("code",[s._v("u")]),s._v("修饰符。点（.）是一个特殊字符，代表任意的单个字符，但是行终止符除外。\n行终止符有："),a("em",[s._v("U+000A 换行符（\\n）、U+000D 回车符（\\r）、U+2028 行分隔符（line separator）\nU+2029 段分隔符（paragraph separator）")])]),s._v(" "),a("ul",[a("li",[s._v("Unicode字符表示法")])]),s._v(" "),a("p",[s._v("ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\u{61}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\\u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("61")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[s._v("上面代码表示，如果不加u修饰符，正则表达式无法识别"),a("code",[s._v("\\u{61}")]),s._v("这种表示法，只会认为这匹配"),a("code",[s._v("61")]),s._v("个连续的"),a("code",[s._v("u")]),s._v("。")]),s._v(" "),a("ul",[a("li",[s._v("量词")])]),s._v(" "),a("p",[s._v("使用u修饰符的情况下，Unicode表达式当中的大括号才会被正确解读，否则会被解读为量词。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" lc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\u{3}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uuu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" lc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\u{3}")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("u")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uuu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false")]),s._v("\n")])])]),a("ul",[a("li",[s._v("预定义模式")])]),s._v(" "),a("p",[a("code",[s._v("\\S")]),s._v("是预定义模式，匹配所有不是空格的字符。只有加了u修饰符，它才能正确匹配码点大于0xFFFF的Unicode字符。")]),s._v(" "),a("ul",[a("li",[s._v("i修饰符")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[a-z]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("iu")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\u212A'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("p",[s._v("上面代码中，不加u修饰符，就无法识别非规范的K字符。")]),s._v(" "),a("ul",[a("li",[s._v("y修饰符")])]),s._v(" "),a("p",[s._v("除了u修饰符，ES6为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符。\ny修饰符与g类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。区别在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。")]),s._v(" "),a("p",[s._v("在g、y修饰符中都可以使用lastIndex属性，y修饰符隐含了头部匹配的标志^（即必须从起始位置匹配得到）")]),s._v(" "),a("p",[s._v("4."),a("code",[s._v("flags")]),s._v("属性")]),s._v(" "),a("p",[s._v("ES6为正则表达式新增了flags属性，会返回正则表达式的修饰符")]),s._v(" "),a("p",[s._v("5."),a("code",[s._v("s")]),s._v("修饰符 "),a("code",[s._v("dotAll")]),s._v("模式")])])}),[],!1,null,null,null);t.default=n.exports}}]);