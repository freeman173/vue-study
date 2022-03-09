// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入store对象
import store from "./store"

Vue.config.productionTip = false
//用$store代替store,后面全局可以$store使用该状态
Vue.prototype.$store=store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //挂载上store对象
  store,
  components: { App },
  template: '<App/>'
})
