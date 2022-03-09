const mutations={
  //同步操作修改变量
  updatainfo_1(state){
    state.info_1.name='大超'
  },
  //异步操作修改变量
  updatainfo_2(state){
    state.info_2.name='我不是你爹'
  },
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  //count这类参数被称为负载payload
  increments(state,count){
    state.counter+=count
  },
  addstudent(state,stu){
    state.students.push(stu)
  },
  save_goods(state, goods) {
    state.goods=goods
  },
  increment_goods_buy(state,product){
    state.goods_buy.push(product)
  },
}

export default mutations
