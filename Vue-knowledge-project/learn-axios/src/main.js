// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


// 基本使用，默认为get请求:
// 先从接口拿到数据，之后再打印出来
axios({
  url:'http://localhost:8080/api/goodlist',
  methods:'get'
}).then(res=>{
  console.log(res)
})

// //post请求
// axios({
//   url:'http://123.207.32.32/home/multidata',
//   methods:'post'
// }).then(res=>{
//   console.log(res)
// })
//
// //带参数的get请求
// axios({
//   url:'http://123.207.32.32/home/data',
//   params:{
//     type:'sell',
//     page:1
//   },
//   methods:'get'
// }).then(res=>{
//   console.log(res)
// })
//
//
//
// //并发请求:
// //该方法返回一个数组:两个请求，两个结果
// axios.all([axios({
//   url:'www.baodu.com'
// }),axios({
//   url:'www.youku.com',
//   params:{
//     type:'opo',
//     page:1
//   }
// })]).then
// (result=>{
//   console.log(result[0]),
//     console.log(result[1])
// })
//
//
//
// //全局配置：在一个axios对象中，有些信息可以全局共享，所以可以抽离出来
// //抽离部分：
// //公共网址
// axios.defaults.baseURL='http://123.207.32.32:8080'
// //响应延迟
// axios.defaults.timeout=5000//毫秒
// //post请求头配置
// axios.defaults.headers.post['Content-Type']='application/x-www……'
//
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'opo',
//     page:1
//   }
// })]).then
// (result=>{
//   console.log(result[0]),
//     console.log(result[1])
// })
//
//
//
// //axios的实例和模块封装：
// //创建axios实例对象来使用
//
// //实例1
// const instance_1=axios.create({
//   baseURL:"http://123.207.32.32:8080",
//   timeout:10000
// })
// instance_1({
//   url:'/home/data'
// }).then(res=>{
//   console.log(res)
// })
//
// //实例2
// const instance_2=axios.create({
//   baseURL:"www.baidu.com",
//   timeout:5000
// })

//封装
//引入专门的网络请求函数
// import {request} from "./newwork/request";
// request({
//   url:'/home/data'
// }).then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })






















