import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home=()=>import('@/views/home/index')
const mine=()=>import('@/views/profile/mine')
const cars=()=>import('@/views/cars/car')
const fenlei=()=>import('@/views/category/fenlei')
const detail=()=>import('@/views/detail/Detail')

const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/cars',
    component:cars,
  },
  {
    path:'/fenlei',
    component:fenlei,
  },
  {
    path:'/mine',
    component:mine,
  },
  {
    path:'/detail',
    component:detail,
  },
]


const router= new Router({
  routes,
  mode:'history'
})

export default router
