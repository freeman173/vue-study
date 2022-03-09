import {request} from "@/network/request";

//在该处专门开发home页面的网络请求
export function home_getdata(){
  return request({
    url:'/data.json',
    params:{
      type:"'pop"
    }
  })
}



export function get_home_goods(){
  return request({
    url:'/goods/goods.json',

  })

}
