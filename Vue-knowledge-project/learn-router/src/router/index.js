//配置路由信息

//1、从依赖包中导入路由对象，并安装好插件
import VueRouter from "vue-router";
import Vue from "vue";
import {config} from "shelljs";
//引入组件
// import home from '../components/home'
// import about from '../components/about'
// import User from "../components/User";

//路由懒加载，打包时使得组件被分别打包
const home=()=>import('../components/home')
const about=()=>import('../components/about')
const user=()=>import('../components/User')
const news=()=>import('../components/next/news')
const messages=()=>import('../components/next/message')
const profile=()=>import('../components/profile')


Vue.use(VueRouter)
//2、创建Vuerouter对象实例


const routes=[
  {
    //当进入项目的根网址时，自动重定向到‘/home’页面
    path:'',
    redirect:'/home'
  },
  {
    path:'/user/:userId',//：userId:为路由拼接参数
    component:user,
    //元数据：用于对该路由组件的描述或标识
    meta:{
      title:'用户页'
    }
  },
  {
    path:'/home',
    component:home,
    meta:{
      title:'主页'
    },
    //在这里配置两个子组件的路由
    children:[
      //当进入项目的home页面时，自动重定向到‘message’组件
      {
        path:'',
        component:messages
      },
      {
        path:'news',
        component:news
      },
      {
        path:'messages',
        component:messages
      }
    ]
  },
  {
    path:'/about',
    component:about,
    meta:{
      title:'关于页'
    }
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      title:'档案页'
    }
  }
]



const router= new VueRouter({
  //配置访问路径
  routes,
  mode:'history',//将路由模式设置为history模式
  // linkActiveClass:'active'//在渲染路由组件时，将里面的活跃css类重命名为‘active’。
})

//在该路由对象中，当路由之间来回切换之前，我们可以将当前工作室的标题提前切换为下个路由组件的名称。
// to:切换的组件路由对象，可以将其打印出来，看它的数据结构
router.beforeEach((to,from,next) =>{
  document.title=to.matched[0].meta.title
  //console.log(to)
  next()
})


//3、将vue-router对象挂到vue实例:在这里导出，在那里引入即可。
export default router
