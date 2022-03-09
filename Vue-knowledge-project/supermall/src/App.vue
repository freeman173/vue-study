
<template>
  <div id="app">
<!--    渲染路由切换的组件-->
    <router-view></router-view>

<!--    直接引用组件名称-->
   <Tab-bar></Tab-bar>

  </div>
</template>

<script>
//将组件引入到该处
import TabBar from "@/components/content/tabbar/TabBar";

export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>


<style>
/* 将css样式文件引入到指定组件*/
@import "~assets/css/base.css";


</style>
