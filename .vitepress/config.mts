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

    // 本地搜索配置（支持中文）
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        },
        // 优化中文搜索 - 支持正文内容检索
        miniSearch: {
          options: {
            // 中文分词：将中文字符逐字拆分，英文按空格/标点分词
            tokenize: (text) => {
              const segmenter = Intl.Segmenter && new Intl.Segmenter('zh-CN', { granularity: 'word' })
              if (segmenter) {
                return [...segmenter.segment(text)]
                  .filter(s => s.isWordLike)
                  .map(s => s.segment.toLowerCase())
              }
              // 降级方案：中文逐字拆分 + 英文按空格分词
              return text
                .toLowerCase()
                .split(/[\s\-.,;:!?'"()[\]{}|<>@#$%^&*+=~`\\/]+/u)
                .flatMap(word => {
                  // 如果包含中文，逐字拆分
                  if (/[\u4e00-\u9fa5]/.test(word)) {
                    return word.split('')
                  }
                  return word ? [word] : []
                })
            }
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        }
      }
    },

    outline: {
      label: '在这一页',
      level: 'deep'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 移动端标签汉化
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    skipToContentLabel: '跳转到内容',

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 404 页面文本（如果启用）
    notFound: {
      title: '页面未找到',
      quote: '您访问的页面不存在，请检查链接是否正确。',
      linkLabel: '返回首页',
      linkText: '返回首页',
      code: '404'
    },

    nav: [
      { text: '主页', link: '/' },
      { text: '1Sekai Wiki', link: '/overview' },
      { text: '更新内容', link: '/whatsnew' },
      { text: '模组', link: '/mods' },
      { text: '数据包', link: '/dp' },
      { text: '新物品', link: '/custom' },
      { text: '网页地图', link: 'http://mc.1dot.cat:1145' }
    ],

    sidebar: [
      {
        text: '基本信息',
        items: [
          { text: '服务器概述', link: '/overview' },
          { text: '更新内容', link: '/whatsnew' },
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
      message: 'Built by 1Dot，Powered by VitePress',
      copyright: '部分图片来自 Minecraft Wiki 和 Modrinth'
    }
  },
  vite: {
    server: {
      port: 8000,   // 设置你想要的端口号，比如 8000
      open: true,   // 在 npm run docs:dev 时自动打开浏览器
    }
  }
})
