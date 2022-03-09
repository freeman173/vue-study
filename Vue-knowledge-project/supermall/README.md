# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

[//]: # (
项目目录结构：
    assets:
        css
        img
    views:项目的主要视图
    components:
        common:其他项目也可以用
        content:本项目公用
    router：
    store：vuex
    network：axios通信
    common：项目的常用工具
        const.js：常用常量
        utils.js：常用方法


引入两个css文件；

vue.config:为项目路径添加别名
.editorconfig:代码格式规范配置


BetterScroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。


)




[//]: # (
项目的大致流程总结：

1、项目数据
项目的模拟数据放在public中的api文件下，通过本地接口引用。

2、
视图文件中存放了首页、购物车、商品详情页面。

首页创建时，模拟数据被存放到vuex文件中；项目其他地方需要数据时，从这里拿就是。

当从首页跳到商品详情页时，使用了路由传参，将具体商品的信息传到详情页，然后从vuex中拿到具体的商品。

从详情页到购物车页面时：先把页面的商品添加到vuex中，然后再跳转到购物车页面；在购物车页面中，
从vuex中取出选中的商品集合并展示。











)











