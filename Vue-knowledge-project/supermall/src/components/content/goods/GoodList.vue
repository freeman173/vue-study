<template>
  <div class="goods">
<!--    从父组件拿到数据后，又逐个遍历传递给子组件-->
      <good-list-item v-for="item in goods" :goodsitem="item">
      </good-list-item>

  </div>

</template>

<script>
//导入子组件
import GoodListItem from "@/components/content/goods/GoodListItem";

export default {
  name: "GoodList",
  components:{
    GoodListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }


}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
}
</style>
