
<!-- 该组件专门负责处理滑动部分-->
<template>
<!--  ref属性：唯一标识符,可以通过this.$refs.'refname'获取到
绑定在组件上，获取的就是组件；在普通元素，获取就是普通元素。
-->
  <div class="wrapper" ref="wrapper">

    <div class="content">

      <slot></slot>

    </div>

  </div>





</template>

<script>
//引入滑动的插件库
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data(){
    return {
      scroll:null
    }
  },
  //该组件被挂载时，调用该方法
  mounted() {
    //拿到ref的专属绑定对象绑定
    this.scroll=new BScroll(this.$refs.wrapper,{})
    //归位到（0，0）位置
    this.scroll.scrollTo(0,0)
  },
  methods:{
      scrollto(x,y){
        console.log('jc'),//消息能传到这里：说明置顶功能没问题，scroll的css样式有些问题，后面来调整
        this.scroll.scrollTo(x,y)
      }
  }

}

</script>

<style scoped>

</style>
