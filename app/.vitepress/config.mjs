import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GV MESS",
  description: "A mess management web app",
  // cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      { text: 'Timetable', link: '/timetable' },
      { text: 'Notifications', link: '/notifications' },
      { text: 'Fee Logs', link: '/feelogs' }
    ],

    sidebar: [
      { text: 'Timetable', link: '/timetable' },
      { text: 'Notifications', link: '/notifications' },
      { text: 'Fee Logs', link: '/feelogs' },
      { text: 'Contribution', link:'/contributing' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/venkatmidhunmareedu/GVmess' }
    ],

    footer:
    {
      message: "Designed and developed by <a href='https://github.com/venkatmidhunmareedu/GVmess/graphs/contributors' target='_blank'>our contributors</a>",
      copyright: 'Copyright © 2024 GV mess management'
    },
    search: {
      provider: 'local'
    }
  }
})
