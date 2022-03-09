const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《数据结构》',
        date:'2009-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《操作系统》',
        date:'2010-9',
        price:100.00,
        count:1
      },
      {
        id:3,
        name:'《计算机网络》',
        date:'2011-9',
        price:89.00,
        count:1
      },
      {
        id:4,
        name:'《计算机组成原理》',
        date:'2017-9',
        price:90.00,
        count:1
      },
    ]
  },
  methods:{
    decrement(index) {
      console.log(index)
      if(this.books[index].count==1)
        this.books[index].count=this.books[index].count
      else
        this.books[index].count--

    },
    increment(index) {
      console.log(index)
      this.books[index].count++
    },
    removehandler(index){
      this.books.splice(index,1)
    }
  },
  filters:{//新属性，过滤器
    showprice(price){
      return '￥'+price.toFixed(2)
    }
  },
  computed:{
    totalprice(){
      return this.books.reduce(function (prevalue,book) {
        return prevalue+book.count*book.price
      },0)
    }
  }
})