const actions={
  //context可以类比mutation的state，就是store对象
  aupdateinfo(context,payload){
    setTimeout(()=>{
      context.commit('updatainfo_2');
      console.log(payload)
    },5000)//5s之后

  },
  save_goods(context,goods){
    context.commit('save_goods',goods)
  }

}
export default actions
