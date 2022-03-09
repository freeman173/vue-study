<template>
<div>
  <NavBar>
    <div slot="left" class="back" @click="backclick">
      <img src="~assets/img/common/back.svg">
    </div>

    <div slot="center" class="titles">
<!--      当用户点击某个属性时，监听事件将对应的下标赋值给currentindex；
currentindex===index：对应的css样式将currentindex对应的属性染红
-->
      <div v-for="(item,index) in titles" class="title_item" :class="{didi:index===currentindex}" @click="changeindex(index)">
        {{item}}</div>
    </div>


  </NavBar>

</div>
</template>


<script>
import NavBar from "@/components/common/navbar/NavBar";


export default {
  name: "DetailNavBar",
  components:{NavBar},
  data(){
    return{
      titles:['商品','参数','评论'],
      currentindex:0,
    }
  },
  methods:{
    changeindex(index){
      this.currentindex=index
    },
    backclick() {
      //直接通过路由退回到上个页面
      this.$router.back()
    }
  }

}
</script>

<style scoped>
.titles{
  display: flex;
  font-size: 18px;

}
.title_item{
  flex: 1;

}
.didi{
  color: var(--color-high-text);
}

.back{
  margin-top: 8px;
  margin-left: 10px;
}

</style>
