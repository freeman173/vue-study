//在这里专门封装网络请求:如果后期需要改动网络请求，直接来这里改动就行

import axios from "axios";

export function request(config){
  const instance=axios.create({
    baseURL:"/api",
    timeout:5000
  })

    //拦截器：每次发送请求或者得到响应后，进行对应处理
    //4种情况：请求成功、失败；响应成功、失败
    instance.interceptors.request.use(config=>{
      //console.log(config)
      //拦截器拦下了config，做了修改需要还回去。
      //1、config有一些危险的东西2、在config中加入一些标识符3、携带登录token
      return config
    },error =>{
      console.log(error)
    } )

  //响应拦截
  instance.interceptors.response.use(res=>{
    //console.log(res);
    //处理完之后，返回数据即可。
    return res.data
  },error => {
    console.log(error)
  })

  //发送请求
  return instance(config)

}
