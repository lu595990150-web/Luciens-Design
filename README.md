# UI 规范文档 React 项目

这是一个基于 `Vite + React` 的 UI 规范文档项目，适合把设计稿中的组件规范整理成可浏览、可演示、可持续维护的页面。

## 启动方式

```bash
npm install
npm run dev
```

默认开发地址通常为 [http://localhost:5173](http://localhost:5173)。

## 已包含内容

- 左侧导航式文档结构
- 颜色系统
- 字体规范
- 间距系统
- 圆角与阴影规范
- 按钮与输入框示例组件

## 你后续主要改哪里

规范数据集中在 [src/data/specDocument.js](C:/Users/Administrator/Documents/Codex/2026-05-22-ui-react-ui/src/data/specDocument.js)。

你可以直接修改这里的内容：

- `colors`: 颜色 token
- `typography`: 字体层级
- `spacing`: 间距规范
- `surfaces`: 圆角和阴影
- `components`: 组件示例

页面结构和样式主要在：

- [src/App.jsx](C:/Users/Administrator/Documents/Codex/2026-05-22-ui-react-ui/src/App.jsx)
- [src/App.css](C:/Users/Administrator/Documents/Codex/2026-05-22-ui-react-ui/src/App.css)
- [src/index.css](C:/Users/Administrator/Documents/Codex/2026-05-22-ui-react-ui/src/index.css)

## 下一步建议

如果你准备把真实设计系统接进来，建议优先补这几类内容：

1. `Button / Input / Select / Tag / Modal / Table` 的状态规范。
2. 空状态、错误状态、加载状态等反馈组件。
3. 深色模式或品牌主题切换。
4. 导出为静态文档或部署到团队内部文档站。
