# gatsby-plugin-waline

[![npm version](https://badge.fury.io/js/gatsby-plugin-waline.svg)](https://badge.fury.io/js/gatsby-plugin-waline)

A Gatsby plugin for [Waline](https://waline.js.org/en/) comment system.

[中文文档](https://github.com/Talaxy009/gatsby-plugin-waline/blob/main/README-zh.md)

## ✨ Features

This plugin help you use Waline comment system more easy in your website.

- Pure wrapping of the latest Waline with React Hooks API
- Support all options of Waline
- Written in TypeScript

## 🚚 Installation

```shell
npm install gatsby-plugin-waline
npm install -D @waline/client
```

or

```shell
yarn add gatsby-plugin-waline
yarn add -D @waline/client
```

This plugin requires **React v16.8** or above.

## 🔦 Usage

0. Follow this [document](https://waline.js.org/en/guide/get-started/) to deploy the server side.

1. Enable the plugin in your gatsby-config.js

    ```js
    // In your gatsby-config.js
    plugins: [
        {
            resolve: `gatsby-plugin-waline`,
            options: {
                // plugin options here
                serverURL: 'YOUR_SERVER_URL',
            },
        },
    ];
    ```

2. Use `<Waline />` component in your page code

    ```jsx
    import React from 'react';
    import Waline from 'gatsby-plugin-waline';

    export default function Page({location}) {
        return (
            <Layout>
                <Waline path={location.pathname} /*component options here*/ />
            </Layout>
        );
    }
    ```

    Plugin options and component options are same. You can put common options (e.g. `serverURL`, `emoji`) in plugin options, some options (e.g. `path`) that you want to set separately for certain pages can be placed in component options. The options will be merged and the options from the component will have higher priority.

3. Import CSS file(s) in your gatsby-browser.js

    ```jsx
    // In your gatsby-browser.js
    import '@waline/client/dist/waline.css';
    ```

    For more detail about style customize, see <https://waline.js.org/en/guide/features/style.html>

After that, you should be able to add and see comments on your website.

## 🔧 Options

Check here: <https://waline.js.org/en/reference/client/props.html>
