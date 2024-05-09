# gatsby-plugin-waline

[![npm version](https://badge.fury.io/js/gatsby-plugin-waline.svg)](https://badge.fury.io/js/gatsby-plugin-waline)

一个为 Gatsby 站点嵌入 [Waline](https://waline.js.org/) 评论系统的插件。

## ✨ 功能

本插件能帮你在你的站点更轻松地使用 Waline 评论。

- 使用 React Hooks API 对最新的 Waline 进行纯粹的封装
- 支持 Waline 的所有配置
- 由 TypeScript 编写

## 🚚 安装

```shell
npm install gatsby-plugin-waline
npm install -D @waline/client
```

或

```shell
yarn add gatsby-plugin-waline
yarn add -D @waline/client
```

本插件依赖 **React v16.8** 或更高版本。

## 🔦 使用方法

0. 查看 Waline [官方文档](https://waline.js.org/guide/get-started/) 以部署你的服务端。

1. 修改你的 gatsby-config.js 文件以启用本插件

    ```js
    // 你的 gatsby-config.js
    plugins: [
        {
            resolve: `gatsby-plugin-waline`,
            options: {
                // 插件配置
                serverURL: 'YOUR_SERVER_URL',
            },
        },
    ];
    ```

2. 在你的页面代码中使用 `<Waline />` 组件

    ```jsx
    import React from 'react';
    import Waline from 'gatsby-plugin-waline';

    export default function Page({location}) {
        return (
            <Layout>
                <Waline path={location.pathname} /*组件配置*/ />
            </Layout>
        );
    }
    ```

    插件配置项和组件配置项是一样的。你可以把常用配置 (如 `serverURL`, `emoji`) 放在插件配置中，把为页面单独配置的选项 (如 `path`) 放在组件配置中。配置会被合并且来自组件的配置有更高的优先级。

3. 在你的 gatsby-browser.js 导入 CSS 文件

    ```jsx
    // 你的 gatsby-browser.js
    import '@waline/client/dist/waline.css';
    ```

    关于自定义样式的信息，详见：<https://waline.js.org/guide/features/style.html>

在这之后，你应该能够在你的站点添加和查看评论了。

## 🔧 配置项

详见：<https://waline.js.org/reference/client/props.html>
