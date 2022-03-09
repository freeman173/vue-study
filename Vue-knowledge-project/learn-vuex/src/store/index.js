//一般在这里使用vuex

import Vue  from "vue";
import Vuex from 'vuex';

//1、安装插件
Vue.use(Vuex)


//store拆分为几个小文件，方便维护:mutations/actions/module/getters；state放在本地方便浏览
const state={
  name:'超哥',
    counter:100,
    students:[
    {id:'001',name:'超哥',age:24},
    {id:'002',name:'刘琪',age:25},
    {id:'003',name:'刘涛',age:26},
    {id:'004',name:'谭四军',age:27},
  ],
    info_1:{id:'001',name:"超哥",age:24},
  info_2:{id:'002',name:"我是你爹",age:24}
}

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./module/moduleA";




//2、创建对象
//vue的state是响应式的，state中的数据更新，vue组件也更新。
//响应式数据原理：vuex-state中的数据最初被写入进去时，框架将会把它们放入响应式监听系统中去，当这些属性变化时，所有涉及的地方都会同步变化。
const store=new Vuex.Store({
  //存储状态数据
  state,
  //对状态做同步操作(比如前端与用户交互时)
  mutations
  //对状态做异步操作（比如后台api的时候）
  //异步操作步骤：时间监听函数通过dispath到actions；再通过context.commit到mutations//就是这么规定的
 ,actions
  //定义一些接口函数，直接拿属性
  ,getters
  ,
  //项目太大时，单一状态树会显得太过臃肿，可以使用模块划分一下
  modules: {
    A:moduleA
  }
})



//3、导出store对象
export default store
