# ui-library

> An ui project base on Vue.js

## 目录结构

```shell
.
├── src/                           // 源码目录
│   ├── packages/                  // 组件目录
│   │   ├── hello-world/           // 组件（以hello-world为例）
│   │   ├── hello-world.vue        // 组件代码
│   │   ├── index.js               // 挂载插件
│   ├── App.vue                    // 页面入口
│   ├── main.js                    // 程序入口
│   ├── index.js                   // （所有）插件入口，若果是单个组件，就不需要这个
├── index.html                     // 入口html文件
.

```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
