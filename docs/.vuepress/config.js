module.exports = {
    title: 'luoxuzhi personal blog',
    description: 'luoxuzhi personal blog',
    head: [
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/icons/favicon.ico` }]
    ],
    serviceWorker: false,
    themeConfig: {
        repo: 'luoxuzhi/know',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: 'Edit in GitHub',
        lastUpdated: 'Last Updated',
        sidebarDepth:0,
        nav: [
            {
                text:'类别',
                items:[
                  {text:'Vue',link:'/vue/'},
                  {text:'React',link:'/react/'},
                  {text:'typescript',link:'/typescript/'}
                ]
            },
            {
                text:'掘金',
                link:'https://juejin.im/user/58f6be4bac502e006c4790f7'
            },
        ],
        sidebar:{
          '/vue/':[
            '',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven'
          ],
          '/react/':[
            '',
            'two'
          ],
          '/typescript/':[
            '',
            'two'
          ],

          // '/':['']
        }
        // sidebar: [
        //     {
        //         title: '准备工作',
        //         collapsable: false,
        //         children: [
        //             'prepare/',
        //             'prepare/flow',
        //         ]
        //     }
        // ]
    }
}
