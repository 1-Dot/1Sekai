// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import './fonts.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  // oxlint-disable-next-line no-unused-vars
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
