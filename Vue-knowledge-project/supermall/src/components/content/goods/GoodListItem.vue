<template>
  <div class="goods_item">
<!--    从父组件拿到单个商品后，依次取出信息！-->
    <div class="goods_info" @click="itemclick">
      <h2>{{goodsitem.title}}</h2>
      <h2>{{goodsitem.price}}</h2>
      <h2>详情页</h2>
    </div>
    <img :src="goodsitem.img">
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return null
      }

    }
  },
  methods:{
    itemclick(){
      //通过动态路由的方式，将商品的id传到详情页，以便后续调用数据。
      this.$router.push({
        path:'/detail',
        query:{
          id:this.goodsitem['id'],
          classical:this.goodsitem['classical'],
        }
        }

      )
    }

  }

}
</script>

<style scoped>
.goods_item {
  padding: 0.21rem;
  width: 50%;
  position: relative;
  padding-bottom: 1.68rem;
}
.goods_info {
  /* 信息 */
  font-size: 0.64rem;
  text-align: center;
  position: absolute;
  bottom: 0.21rem;
  left: 0;
  right: 0;
}

</style>
