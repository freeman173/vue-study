<template>
  <div>
<!--<h2>我在个人页</h2>-->
    <div><h2 >{{}}</h2></div>

  </div>






</template>

<script>
//导入api接口
import {get_home_goods} from "@/network/home";




export default {
  name: "mine",
  data(){
    return {
      goods:null,
      good:null,
    }

  },
  created() {
    this.get_home_goods_api()

  },
  methods: {
    get_home_goods_api() {
      this.goods=this.$store.getters.get_goods
      }

    }
}




</script>

<style scoped>

</style>
