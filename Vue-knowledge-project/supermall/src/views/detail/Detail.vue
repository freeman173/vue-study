
<!--
详情页面还需要再完善一下：



-->

<template>
<div>
  <DetailNavBar>
  </DetailNavBar>
  <div class="goods_item">
    <!--    从父组件拿到单个商品后，依次取出信息！-->
    <Basic :good_basic="good_basic"></Basic>
    <Params :good_params="good_params"> </Params>
    <Reviews :good_review="good_review"></Reviews>
<!--    该组件的样式并未设置好，后面有机会再来调一下-->
<!--    接受点击事件-->
    <DetailBottomBar @addEvent="addEvent"></DetailBottomBar>
  </div>


</div>
</template>

<script>
import DetailNavBar from "@/views/detail/children/DetailNavBar";
import Basic from "@/views/detail/children/Basic";
import Params from "@/views/detail/children/Params";
import Reviews from "@/views/detail/children/Reviews";
import DetailBottomBar from "@/views/detail/children/DetailBottomBar";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    Basic,
    Params,
    Reviews,
    DetailBottomBar
  },
  data(){
    return{
      id:null,
      classical:null,
      item:null,
      good_basic:null,
      good_params:null,
      good_review:null,
    }
  },
  //该组件加载时，调用该函数
  created() {
    //从当前活跃动态路由对象中取出传过来的参数
    this.id=this.$route.query['id']
    this.classical=this.$route.query['classical']
    //取出货物
    let goods=this.$store.getters.get_goods[this.classical]
    for(let good in goods){
      if(goods[good].id==this.id){
        this.item=goods[good]
        this.good_basic={
          title:this.item['title'],
          id:this.item['id'],
          classical:this.item['classical'],
          img:this.item['img']
        }
        this.good_params=this.item['params']
        this.good_review=this.item['reviews']
        console.log(this.good_review)
      }
    }
  },
  methods:{
    addEvent(){
      const product={}
      product.image=this.item['img']
      product.title=this.item['title']
      product.params=this.item['params']
      product.number=1
      // console.log(product)
      //把商品信息提交到vuex中去，然后购物车再从vuex中去拿
      this.$store.commit('increment_goods_buy',product)
      //跳转到购物车页面
      this.$router.push('/cars')
    },
    didi(){
      //console.log(this.number)
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
