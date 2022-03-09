const getters={
  power(state){
    return state.counter*state.counter
  },
  //获取指定年龄的学生
  more25stu(state){
    return state.students.filter(s=>s.age>0)
  },
  //获取上一个函数的结果个数：getters就是这个方法对象;第一个、第二个参数的顺序固定了的
  more25stulength(state,getters){
    return getters.more25stu.length
  },
  //从外面传参就这样做
  more26stu(state){
    return function (age){
      return state.students.filter(s=>s.age>age)
    }
  }
}
export default getters
