## picgo-plugin-info-url [![NPM version][npm-image]][npm-url]

> [PicGo](https://picgo.github.io/PicGo-Doc/)插件。用于格式化图片名称，可在 url 中增加图片宽高等信息，便于瀑布流或图片占位

### 目前支持配置

|        参数        |              默认值/建议值               | 说明                                                                                                                  |
| :----------------: | :--------------------------------------: | --------------------------------------------------------------------------------------------------------------------- |
|   _`timeFormat`_   |          `YYYY-MM-DD--HH-mm-ss`          | 时间格式化配置。参考 [dayjs 格式化](https://day.js.org/docs/zh-CN/display/format)                                     |
| _`filenameFormat`_ | `${time}_${width}x${height}_${filename}` | 文件名格式化。目前支持：时间`${time}`、图片宽度`${width}`、图片高度`${height}`、原文件名（_不含扩展名_）`${filename}` |

### 参考

- [插件开发文档](https://picgo.github.io/PicGo-Core-Doc/zh/dev-guide/cli.html)
- [picgo-plugin-super-prefix](https://github.com/gclove/picgo-plugin-super-prefix)

[npm-image]: https://badge.fury.io/js/picgo-plugin-info-url.svg
[npm-url]: https://npmjs.org/package/picgo-plugin-info-url
