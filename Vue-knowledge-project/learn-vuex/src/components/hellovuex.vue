<template>
<div>

  <h2>getters的基本使用</h2>
<!--  直接使用getters.power拿属性-->
  {{$store.getters.power}}
  <h3>获取学生信息</h3>
  {{$store.getters.more25stu}}
  <h3>学生个数</h3>
  {{$store.getters.more25stulength}}
<!--  传参的使用-->
  <h3>{{$store.getters.more26stu(26)}}</h3>

  <h2>mutation的使用</h2>
  {{$store.state.counter}}
  <!--  添加两个点击事件-->
  <button @click="jia">+</button>
  <button @click="jian">-</button>
<!--  传参-->
  <button @click="jias(10)">+10</button>
<!-- 添加学生-->
  <button @click="addstudent">添加学生</button>
<H2>  VUEX的数据响应原理之同步修改</H2>
  {{$store.state.info_1}}
<button @click="updateinfo_1">修改信息</button>

  <H2>  VUEX的数据响应原理之异步修改</H2>
  {{$store.state.info_2}}
  <button @click="updateinfo_2">修改信息</button>

<h2>子模块中的内容</h2>
<!--  通过.A属性拿子模块的内容-->
{{$store.state.A.name}}
  <button @click="updatemodulename">修改信息</button>
  <button @click="aupdatemodulename">异步修改信息</button>
<!--  虽然在模块中定义了getters属性，但拿的时候并不关心状态 -->
{{$store.getters.fullname}}
  {{$store.getters.fullname2}}
  {{$store.getters.fullname3}}
</div>
</template>

<script>
export default {
  name: "hellovuex",
  methods:{
    jia(){
      //通过该语句将操作提交到指定的store.mutation
      this.$store.commit('increment')
    },
    jian(){
      this.$store.commit('decrement')
    },
    jias(count){
      this.$store.commit('increments',count)
    },
    addstudent(){
      const stu={id:'008',name:'谢经辉',age:18}
      this.$store.commit('addstudent',stu)
    },
    updateinfo_1(){
      this.$store.commit('updatainfo_1')
    },
    //异步加载使用$store的dispath属性
    updateinfo_2(){
      this.$store.dispatch('aupdateinfo','我用异步加载了')
    },
    //模块的操作:store里面的mutations都统一用$store.commit提交，提交之后，框架会自动会找对应操作。
    updatemodulename(){
      this.$store.commit('updatemodulename')
    },
    //
    aupdatemodulename(){
      this.$store.dispatch('aupdatename')
    }
  }
}
</script>

<style scoped>

</style>
