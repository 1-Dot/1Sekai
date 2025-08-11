// oxlint-disable no-unused-vars
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '1Sekai MC',
  description: 'A Minecraft Server',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/1Sekai.webp' }], ['meta', { name: 'algolia-site-verification', content: 'CE8BBB92B9FDB1FC' }], ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.cn/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap' }]],
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/1Sekai.webp',

    /* search: {
      provider: 'algolia',
      options: {
        appId: '8PVBU80YYV',
        apiKey: '2bcbf150eb71ec66ceeee9d5b33600ba',
        indexName: 'sekai_1dot_cat_8pvbu80yyv_pages'
      }
    },*/

    outline: {
      label: '在这一页',
      level: 'deep'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '文档教程', link: '/getting-started' },
      { text: '网页地图', link: 'http://mc.1dot.cat:1145' }
    ],

    sidebar: [
      {
        text: '基本',
        items: [
          { text: '快速入门', link: '/getting-started' },
          { text: '服务器须知', link: '/rules' },
          { text: '关于上周目', link: '/legacy' }
        ],
      },
      {
        text: '大型数据包',
        items: [
          { text: 'Stellarity 末地', link: '/stellarity' },
          { text: '地牢与酒馆', link: '/dnt' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: '模组说明', link: '/mods' },
          { text: '数据包说明', link: '/datapacks' },
          { text: '资源包说明', link: '/resourcepacks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/180186596' },
      { icon: 'qq', link: 'https://qm.qq.com/q/AyERclmhUc' }
    ],

    footer: {
      message: '由 1Dot 在内 1Sekai 的所有玩家共同构建',
      copyright: 'Powered by VitePress'
    }
  },
  vite: {
    server: {
      port: 8000,   // 设置你想要的端口号，比如 8000
      open: true,   // 在 npm run docs:dev 时自动打开浏览器
    }
  }
})
