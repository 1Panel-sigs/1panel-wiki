---
layout: home

hero:
  name: 1Panel Wiki
  text: 1Panel的社区力量
  tagline: 这里汇集了 1Panel 的官方文档和常见问答，以及社区贡献的各种服务和工具。
  actions:
    - theme: brand
      text: 立即开始
      link: /guide/
    - theme: alt
      text: 关于我们
      link: /about/
  image:
    src: /favicon.png
    alt: VitePress

features:
  - title: 官方文档
    icon: 🛠️
    details: 一切的一切，都从这里开始。1Panel 的官方文档，帮助你快速上手 1Panel 。
    link: /officialDoc/
  - title: 第三方应用商店
    icon: 📦
    details: 由社区成员维护的 1Panel 扩展应用商店，提供各种实用的 docker 应用。
    link: /thirdStores/
  - title: 论坛常见问答
    icon: 🤔
    details: 整理了论坛中常见问题及其解答，帮助你快速解决使用中的问题。
    link: /faq/
  - title: 社区监控探针
    icon: 📊
    details: 社区运营的监控探针，实时监控 1Panel 相关站点的运行状态和性能。
    link: https://status.1panel.top/
  - title: 社区贡献
    icon: 🎉
    details: 欢迎社区成员提交扩展、分享经验或完善文档。
  - title: 联系我们
    icon: 📧
    details: 有任何问题或建议，请通过GitHub、论坛或邮件联系我们。
    link: /about/

---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
