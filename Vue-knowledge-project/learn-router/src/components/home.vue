<template>
<div>
  <h2>超哥在首页</h2>
<!--  在该组件配置了两个子组件-->
  <router-link to="/home/news" tag="button">新闻</router-link>
  <router-link to="/home/messages" tag="button">消息</router-link>
  <router-view></router-view>

</div>

</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

</style>
