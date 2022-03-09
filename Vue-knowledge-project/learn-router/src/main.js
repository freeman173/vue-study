import Vue from 'vue'
import App from './App'
import router from './router'//引入路由装置

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//在这里将路由与组件挂上。
  render: h => h(App)
})
