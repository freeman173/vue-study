//定义一个子模块
const moduleA={
  state:{
    name:'我是一个小超哥'
  },
  mutations:{
    updatemodulename(state){
      state.name='我不是一个小超哥'
    }
  },
  //异步修改:这里的context就只代表这个模块
  actions:{
    aupdatename(context){
      setTimeout(()=>{
        context.commit('updatemodulename')
      },5000)
    }
  },
  getters:{
    fullname(state){
      return state.name+',11111'
    },
    //参数getters表示模块的getters对象
    fullname2(state,getters){
      return getters.fullname+',22222'
    },
    //rootState：根store的状态
    fullname3(state,getters,rootState){
      return getters.fullname2+rootState.name
    }
  }
}
export default moduleA
