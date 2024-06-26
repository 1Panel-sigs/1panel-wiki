import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  base: '/',
  srcExclude: ['**/README', '**/TODO'],
  assetsDir: 'static',
  srcDir: 'src',
  lastUpdated: true,
  title: "1Panel Wiki",
  description: "1Panel三方wiki",
  head: [['link', { rel: 'icon', href: './favicon.png' }]],
  sitemap: { hostname: 'https://example.com' }  /* 待填坑 */,
  themeConfig: {
    logo: '/favicon.png',
    nav: nav(),
    sidebar: {
      '/officialDoc/': { base: '/officialDoc/', items: sidebarDocs() },
      '/thirdStores/': { base: '/thirdStores/', items: sidebarThirdStores() }
    },
    socialLinks: [
      { icon: 'github', link: 'https://example.com' }  /* 待填坑 */
    ],
    footer: {/* 
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You' */
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
}
)

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '官方文档', link: '/officialDoc/' },
    { text: '第三方应用商店', link: '/thirdStores/' },
    { text: '服务状态监控', link: 'https://status.1panel.top/' },
    { text: '声明', link: 'https://status.1panel.top/' },  //待填坑
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '安装部署',
      collapsed: false,
      base: '/officialDoc/installation/',
      items: [
        { text: '在线安装', link: 'online_installation' },
        { text: '安装包安装', link: 'package_installation' },
        { text: '阿里云镜像安装', link: 'cloud_image' },
        { text: '在线升级', link: 'online_upgrade' },
        { text: '命令行工具', link: 'cli' }
      ]
    },
    {
      text: '功能手册',
      collapsed: false,
      base: '/officialDoc/user_manual/',
      items: [
        {
          text: '应用商店',
          collapsed: false,
          items: [
            { text: '应用商店概述', link: 'appstore/appstore' },
            { text: '安装应用', link: 'appstore/install' },
            { text: '应用操作', link: 'appstore/installed' }
          ]
        },
        {
          text: '网站',
          collapsed: false,
          items: [
            { text: '网站概述', link: 'websites/websites' },
            { text: '创建网站', link: 'websites/website_create' },
            { text: '基本设置', link: 'websites/website_config_basic' },
            { text: '安全设置', link: 'websites/website_config_waf' },
            { text: '其他设置', link: 'websites/website_config_other' },
            { text: '网站分组', link: 'websites/website_group' },
            { text: '网站备份', link: 'websites/website_backup' },
            { text: 'OpenResty 设置', link: 'websites/openresty' }
          ]
        },
        {
          text: '证书',
          collapsed: false,
          items: [
            { text: '证书概述', link: 'websites/certificate' },
            { text: '申请证书', link: 'websites/certificate_create' },
            { text: '续签证书', link: 'websites/certificate_renew' },
            { text: 'Acme 账户', link: 'websites/certificate_acme' },
            { text: 'DNS 账户', link: 'websites/certificate_dns' }
          ]
        },
        {
          text: '运行环境',
          collapsed: false,
          items: [
            { text: 'PHP', link: 'websites/php' },
            { text: 'Node.js', link: 'websites/node' }
          ]
        },
        {
          text: '数据库',
          collapsed: false,
          items: [
            { text: 'MySQL', link: 'databases/mysql' },
            { text: 'Redis', link: 'databases/redis' }
          ]
        },
        {
          text: '容器',
          collapsed: false,
          items: [
            { text: '容器', link: 'containers/container' },
            { text: '编排', link: 'containers/compose' },
            { text: '镜像', link: 'containers/image' },
            { text: '网络', link: 'containers/network' },
            { text: '存储卷', link: 'containers/volume' },
            { text: '仓库', link: 'containers/repo' },
            { text: '编排模版', link: 'containers/compose_template' },
            { text: '配置', link: 'containers/setting' }
          ]
        },
        { text: '计划任务', link: 'cronjobs' },
        {
          text: '主机',
          collapsed: false,
          items: [
            { text: '文件', link: 'hosts/file' },
            { text: '监控', link: 'hosts/monitor' },
            { text: '终端', link: 'hosts/terminal' },
            { text: '防火墙', link: 'hosts/firewall' }
          ]
        },
        {
          text: '工具箱',
          collapsed: false,
          items: [
            { text: '进程守护', link: 'toolbox/supervisor' },
            { text: 'FTP', link: 'toolbox/ftp' },
            { text: 'Fail2ban', link: 'toolbox/fail2ban' }
          ]
        },
        { text: '面板日志', link: 'logs' },
        {
          text: '高级功能',
          collapsed: false,
          items: [
            {
              text: 'WAF',
              collapsed: false,
              items: [
                { text: '概述', link: 'xpack/waf/waf' },
                { text: '概览', link: 'xpack/waf/dashboard' },
                { text: '全局设置', link: 'xpack/waf/global' },
                { text: '网站设置', link: 'xpack/waf/site' },
                { text: '拦截记录', link: 'xpack/waf/log' },
                { text: '封锁记录', link: 'xpack/waf/block' }
              ]
            }
          ]
        },
        { text: '面板设置', link: 'settings' }
      ]
    },
    {
      text: '常见问题',
      collapsed: false,
      base: '/officialDoc/faq/',
      items: [
        { text: '产品 FAQ', link: 'faq' },
        { text: '操作系统相关', link: 'operating_system' },
        { text: '系统功能相关', link: 'system_function' },
        { text: '服务器架构相关', link: 'server_architecture' }
      ]
    },
    { text: '开发文档', base: '/officialDoc/dev_manual/', link: 'dev_manual' },
    { text: '版本迭代', link: 'changelog' },
    { text: '联系我们', link: 'contact' }
  ]
}

function sidebarThirdStores(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '三方商店介绍',
      link: '/index'
    },
    {
      text: 'okxlin/appstore',
      link: '/okxlin/index',
      collapsed: false,
      items: [
        { text: '应用列表', link: '/okxlin/app_list' },
        { text: '应用详情', link: '/okxlin/app_detail' }
      ]
    },
  ]
}