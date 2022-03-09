
<!-- template里面的内容已经被系统框架关联到该vue组件上并绑定系统的DOM树上了。-->
<template>
  <div class="tar-bar-item" @click="itemclick" >
<!--    在小组件这里定义插槽：不同小组件，不同写法-->
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
<!--    当用户点击时，图标变为活跃状态-->
    <div v-else><slot name="item-icon-active"></slot></div>
<!--    当用户点击时，字体变红-->
    <div :class="{active:isactive}"><slot name="item-text"></slot></div>
  </div>

</template>

<script>
export default {
  name: "TabBar-Item",
  //这里接受父组件传过来的path值
  props:{
    path:String
  },
  data(){
    return{
      //isactive:false
    }
  },
  computed:{
    isactive(){
      //如果当前活跃路由路径跟页面所在路由路径匹配，则isactive为true：只让你点击的地方变红，标志为活跃状态
      return this.$route.path.indexOf(this.path) !==-1
    }
  },
  methods:{
    itemclick(){
      console.log(this.path+'itemclick!')
      //this.isactive=!this.isactive
      //跳转过去
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
/* 将css样式文件引入到指定组件*/
@import "~assets/css/Tarbar-item.css";
</style>
