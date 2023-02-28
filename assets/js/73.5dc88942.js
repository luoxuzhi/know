(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{497:function(t,n,s){"use strict";s.r(n);var e=s(53),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_6-nginx-代理配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-nginx-代理配置"}},[t._v("#")]),t._v(" 6.nginx 代理配置")]),t._v(" "),s("ol",[s("li",[t._v("同一个端口设置多个域名，根据dns解析原理设置本地"),s("code",[t._v("hosts")])])]),t._v(" "),s("div",{staticClass:"language-conf extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 同一个端口设置多个域名\nserver {\n    listen       80;\n    server_name  ncuniversitylxz.xin;\n    #return 302 https://$host$request_uri;\n\n    #charset koi8-r;\n    #access_log  logs/host.access.log  main;\n\n    location / {\n        root   html;\n        index  index.html index.htm;\n    }\n}\nserver{\n    listen 80;\n    server_name ncuxz.fun;\n\n    location / {\n           root html;\n           index index.html index.htm;\n    }\n}\n")])])]),s("p",[s("code",[t._v("proxy_set_header")]),t._v(" :在将客户端请求发送给后端服务器之前，更改来自客户端的请求头信息。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/http4.png")}}),t._v(" "),s("p",[t._v("2.代理服务器缓存设置："),s("code",[t._v("cache")]),t._v(" 路径  在"),s("code",[t._v("windows")]),t._v("用相对路径，在"),s("code",[t._v("linux")]),t._v("用绝对路径")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/http5.png")}}),t._v(" "),s("p",[t._v("设置了代理服务器缓存后请求效果")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/http6.png")}}),t._v(" "),s("p",[t._v("3.请求头一致才使用代理缓存，代理缓存验证的响应头为"),s("code",[t._v("Vary")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/http7.png")}})])}),[],!1,null,null,null);n.default=a.exports}}]);