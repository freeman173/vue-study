<template>
  <div class="recommend">
    <div v-for="item in result" class="recommend_item">
      <a :href="item.link">
        <img :src="item.img">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import {home_getdata} from "@/network/home";

export default {
  name: "Recommend",
  data(){
    return {
      result:null
    }},

  //在这里请求数据并返回
  created() {
    home_getdata().then(res=>{
      //补充知识点：某个函数调用结束后，相关的变量自动被销毁。
      this.result=res
    })
  }


}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  padding: 15px 0 30px;
  border-bottom: 8px solid #eee;
}




.recommend_item{
  flex: 1;
  text-align: center;
}
.recommend_item img{
  width: 150px;
  height: 220px;
}
</style>
