## picgo-plugin-info-url

> 格式化图片名称，可在 url 中增加图片宽高等信息，便于瀑布流或图片占位

### 目前支持配置

1. 时间格式化配置 (_`timeFormat`_) 。参考 [dayjs 格式化](https://day.js.org/docs/zh-CN/display/format)
1. 文件名格式化 (_`filenameFormat`_) 。目前支持：
   - `${time}` 时间
   - `${width}` 宽度
   - `${height}` 高度
   - `${filename}` 原文件名（不含扩展名）

### 参考

- [插件开发文档](https://picgo.github.io/PicGo-Core-Doc/zh/dev-guide/cli.html)
- [picgo-plugin-super-prefix](https://github.com/gclove/picgo-plugin-super-prefix)
