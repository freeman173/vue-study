
<!--将购买的商品以数组的形式展现：
商品名、单价、总价、购物车总价价格

-->
<template>
  <div>
<!--    <button @click="select_goods_buy">点击我查看购物车情况</button>-->
<!--      如果购物车为空，则做一个判断-->
    <div v-if="products_buy.length">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>商品名称</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(book,index) in products_buy">
      <!--         将遍历的数组下标当做商品序列号-->
          <td>{{index+1}}</td>
          <!--      showprice为vue中的过滤器：调用时，自动将book.price作为参数传进去-->
          <td>{{book.title}}</td>
          <td>{{book.params['price']|showprice}}</td>
          <td>
            <button @click="decrement(index)">-</button>
            {{book.number}}
            <button @click="increment(index)">+</button>
          </td>
          <td>{{book.params['price']*book.number}}</td>
          <td><button @click="removehandler(index)">移除</button></td>
        </tr>
        </tbody>
      </table>
          <h2>总价格：{{totalprice | showprice}}</h2>
      </div>
      <h2 v-else>购物车为空</h2>

    </div>

</template>

<script>
export default {
  name: "car",
  data() {
    return {
      products_buy: null,
    }
  },
  filters: {//新属性，过滤器
    showprice(price) {
      return '￥' + price.toFixed(2)
    }
  },

  //加载该组件之前做一个渲染
  beforeMount() {
    this.products_buy = this.$store.getters.get_products_buy
  },

  methods: {
    //移除某个商品
    removehandler(index) {
      this.products_buy.splice(index, 1)
    },
    //减少商品数量，但不能小于1
    decrement(index) {
      console.log(index)
      if (this.products_buy[index].number == 1)
        this.products_buy[index].number = 1
      else
        this.products_buy[index].number--
    },
    //增加商品数量，但不能大于库存
    increment(index) {
      if (this.products_buy[index].number == this.products_buy[index].params.size_numbers)
        this.products_buy[index].number = this.products_buy[index].params.size_numbers
      else
        this.products_buy[index].number++
    },
  },
  computed: {
    totalprice() {
      return this.products_buy.reduce(function (prevalue, book) {
        return prevalue + book.number * book.params['price']
      }, 0)
    }
  }

}
</script>

<style scoped>
table{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th,td{
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th{
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}

</style>
