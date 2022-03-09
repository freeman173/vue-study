<template>
  <div id="tab-bar">
<!--    在tab-bar组件里，将path属性值传给子组件 -->
    <TabBarItem path="/home">
      <img slot="item-icon-active" src="~assets/img/tabbar/index_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/index.svg">
      <div slot="item-text">首页</div>
    </TabBarItem >
    <TabBarItem path="/fenlei">
      <img slot="item-icon-active" src="~assets/img/tabbar/fenlei_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg">
      <div slot="item-text">分类</div>

    </TabBarItem>
    <TabBarItem path="/cars">
      <img slot="item-icon-active" src="~assets/img/tabbar/car_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/car.svg">
      <div slot="item-text">购物车</div>

    </TabBarItem>
    <TabBarItem path="/mine">
      <img slot="item-icon-active" src="~assets/img/tabbar/mine_active.svg">
      <img slot="item-icon" src="~assets/img/tabbar/mine.svg">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </div>

</template>

<script>
import TabBarItem from "./TabBar-Item";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
/* 将css样式文件引入到指定组件*/
@import "~assets/css/Tarbar.css";


</style>
