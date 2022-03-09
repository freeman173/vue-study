<template>
<div>
  <h2>商品名：{{good_basic.title}}</h2>
  <img :src="good_basic.img">

</div>

</template>

<script>
export default {
  name: "Basic",
  props:{
    good_basic:Object,
  },

}
</script>

<style scoped>

</style>
