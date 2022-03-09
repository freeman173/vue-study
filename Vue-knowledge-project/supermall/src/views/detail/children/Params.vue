<template>
  <div>
    <h3>价格：{{good_params.price}}</h3>
    <h3>库存：{{good_params.size_numbers}}</h3>
  </div>
</template>

<script>
export default {
  name: "Params",
  props:{
    good_params:Object,
  },
}
</script>

<style scoped>

</style>
