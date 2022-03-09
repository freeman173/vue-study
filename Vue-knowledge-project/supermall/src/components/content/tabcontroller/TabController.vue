<template>
<div class="tab-controller">
<!--  v-bind：动态绑定css中的active样式; index===currentindex:让index等于currentindex-->
<div v-for="(item,index) in titles" class="tab-controller-item"
 :class="{actives:index===currentindex}" @click="indexcount(index)">
  <span>
    {{item}}
  </span>

</div>


</div>

</template>

<script>
export default {
  name: "TabController",
  //父传子
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentindex:0
    }

  },
  methods:{
    indexcount(index){
      this.currentindex=index
    //  子传父:将该组件发生的事情传递给父组件
      this.$emit('indexcount',index)
    }
  }

}
</script>

<style scoped>
.tab-controller{
  display: flex;
  text-align: center;
  font-size: 25px;
  height: 40px;
  line-height: 40px;
}

.tab-controller-item{
flex: 1;
}
.actives{
  /*在assets/css/base文件中提前定义好了这些变量*/
  color: var(--color-high-text);
}
/*给里面的span加上下划线样式*/
.actives span{
  /*在assets/css/base文件中提前定义好了这些变量*/
  border-bottom: 3px solid var(--color-tint);
}
</style>
