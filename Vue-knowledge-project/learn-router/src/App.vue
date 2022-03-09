<template>
  <div id="app">
<!--
'router-link' 被默认渲染为<a>标签；
 ‘router-link’：
      tag属性：可以将指定组件渲染成指定标签
      replace:不会留下history记录

  'router-link'被渲染后，标签内会自带有两个css类：
      1、在路由的index.js的router对象中，添加属性：linkActiveClass:'active'//在渲染路由组件时，将里面的活跃css类重命名为‘active’。
      2、<style>中添加样式。

     -->
<!--    <router-link to="/home" tag="button">首页</router-link>-->
<!--    <router-link to="/about" tag="button">关于</router-link>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

        <router-link to="/home" tag="button">首页</router-link>
        <router-link to="/about" tag="button">关于</router-link>
<!--&lt;!&ndash;  to属性后面本质上是跟一个对象：可以传路径、query过去  &ndash;&gt;-->
<!--    <router-link :to="{path:'/profile',query:{name,age,height}}" tag="button">档案</router-link>-->
<!--    &lt;!&ndash;    通过v-bind指令将app.vue中的userid传给路由拼接参数以拼接到后面    &ndash;&gt;-->
<!--        <router-link :to="'/User/'+userId" tag="button">用户页面</router-link>-->
    <button @click="userclick">用户</button>
    <button @click="profileclick">档案</button>
<!--    keep-alive:让里面的组件保持上次的状态
        exclude：将某个组件排除(将vue组件名写上去即可)
  -->
    <keep-alive exclude="home">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>


<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'山本太郎',
      name:'超哥',
      age:24,
      height: 1.73
    }
  },
  methods:{
    homeClick(){
      //$router为路由对象实例，借助push跳转过去
      // this.$router.push('/home')
      //借助replace跳转过去
      this.$router.replace('/home')
      console.log("homeclick")
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
      console.log("aboutclick")
    },
    //通过函数的形式将参数传过去
    userclick(){
      // this.$router.push('/about')
      this.$router.replace('/user/'+this.userId)
      console.log("aboutclick")
    },
    profileclick(){
      // this.$router.push('/about')
      this.$router.replace({
        path:'/profile',
        query:{
          name:this.name,
          age:this.age,
          height:this.height
        }

        }

      )
      console.log("aboutclick")
    },
  }
}
</script>


<style>
.active{
  color: brown;
}
</style>
