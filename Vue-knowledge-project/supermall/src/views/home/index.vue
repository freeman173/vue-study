<template>
 <div id="home">
<!--   购物街图标-->
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>

<!--   轮播图:这个板块后面再来添加，有些信息不是很完整-->
<!--<swiper>-->
<!--  -->
<!--  <swiper-item v-for="item in result">-->
<!--    <a :href="item.link">-->
<!--      <goods :src="item.goods">-->
<!--    </a>-->
<!--  </swiper-item>-->

<!--</swiper>-->
<!-- 将页面这几个组件套上滑动组件，就可以实现滑动效果了-->
   <Scroll class="Content" ref="scroll">
     <!--   推荐信息模块-->
     <Recommend></Recommend>

     <!-- 本周流行展示页面:这个组件有些鸡肋，不弄了 -->
     <!--   <Feature></Feature>-->

     <!--   商品信息分类-->
     <!--   将父组件中的数据传到子组件的titles中-->
     <TabController :titles="titles" class="tab-controller" @indexcount="indexcount"></TabController>
     <!--商品信息-->
     <GoodList :goods="goods[goodstype]"></GoodList>

   </Scroll>


<!--置顶图标:

@click监听组件原生事件的话：添加属性.native
-->
<BackTop @click.native="backclick"></BackTop>



 </div>
</template>

<script>
//导入方法
import{home_getdata} from "@/network/home";

//导入组件
import NavBar from "@/components/common/navbar/NavBar";
import Recommend from "@/views/home/children/Recommend";
import Feature from "@/views/home/children/Feature";
import TabController from "@/components/content/tabcontroller/TabController";
import GoodList from "@/components/content/goods/GoodList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

//导入api接口
import {get_home_goods} from "@/network/home";



export default {
  name: "index",
  components:{
    NavBar,
    Recommend,
    Feature,
    TabController,
    GoodList,
    Scroll,
    BackTop
  },
  data(){
    return {
      result:null,
      titles:['流行','复古','古典'],
      goods:{
        'pop':[],
        'fugu':[],
        'classical':[]
      },
      goodstype:'pop'
    }

  },
  created() {
   this.get_home_goods_api()

  },
  methods:{
    get_home_goods_api(){
      get_home_goods().then(res=>{
        //将拿到的整体商品数据封装到vuex里面
        this.$store.dispatch('save_goods',res)
        this.goods=this.$store.getters.get_goods
      })
    },
    indexcount(index) {
      switch (index){
        case 0:
          this.goodstype='pop'
          console.log(index)
          break
        case 1:
          this.goodstype='fugu'
          console.log(index)
          break
        case 2:
          this.goodstype='classical'
          console.log(index)
          break
      }
    },
    //回到页面顶部
    backclick(){
      this.$refs.scroll.scrollto(0,0)
    }

  }




}

// import axios from "axios";
//
// axios({
//   url:'/api/goods.json',
//   methods:'get'
// }).then(res=>{
//   console.log(res)
// })







</script>

<style scoped>

#home {
  /**
  * 有了BS之后，可以不需要这2个
  * padding-top: 44px;
  * padding-bottom: 49px;
  * 下方BS的.wrapper样式里就有 top44 bottom49
  */
  /* 一定要有home的高度，否则其子对象wrapper无法正确显示 */
  height: 100vh;
  position: relative;
}

.home-nav {
  /*base.css文件中有引入*/
  background-color: var(--color-tint);
  color: #FFFFFF;


}

.tab-controller{
  position: sticky;
  top:100px
}

.Content{
  height: 300px;
  /*overflow: hidden;*/
}


</style>
