

module.exports = {
    title: 'WAY',
    description: '个人记录',
    head: [
      ['link', { rel: 'icon', href: '/blog.png' }]
    ],
    themeConfig: {
      logo: '/blog.png',
      nav: [
        { text: '主页', link: '/' },
        { text: '博客文章', link: '/guide/blog' },
        { text: '网站记录', link: '/guide/site' },
        { text: '开发笔记', link: '/guide/dev' },
        { text: '生活笔记', link: '/guide/life' }
      ],
      sidebar: 'auto',
      lastUpdated: '上次更新',
    }
  }