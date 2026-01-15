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
      { text: '1Sekai Wiki', link: '/overview' },
      { text: '网页地图', link: 'http://mc.1dot.cat:1145' }
    ],

    sidebar: [
      {
        text: '基本信息',
        items: [
          { text: '服务器概述', link: '/overview' },
          { text: '关于上周目', link: '/legacy' },
        ],
      },
      {
        text: '小内容介绍',
        items: [
          { text: '模组', link: '/mods' },
          { text: '数据包', link: '/dp' },
          { text: '资源包', link: '/rp' }
        ]
      },
      {
        text: '大型拓展内容',
        items: [
          { text: '农夫乐事', link: '/delight' },
          { text: '地牢与酒馆', link: '/dnt' },
          { text: 'Friends & Foes', link: '/fnf' },
          { text: 'Stellarity 末地', link: '/stellarity' },
          { text: 'Incendium 下界', link: '/incendium' },
          { text: '其他自定义物品', link: '/custom' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/180186596' },
      { icon: 'discord', link: 'https://discord.gg/Kh3djKZ6Jp' },
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
