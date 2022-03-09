// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入store对象
import store from "@/store";

//用$store代替store,后面全局可以$store使用该状态
Vue.prototype.$store=store
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
