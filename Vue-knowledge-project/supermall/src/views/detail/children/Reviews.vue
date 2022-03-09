<template>
  <div>
    <h2>评论：</h2>
    <H3 v-for="item in good_review">{{item}}</H3>

  </div>
</template>

<script>
export default {
  name: "Reviews",
  props:{
    good_review:Array,
  },
}
</script>

<style scoped>

</style>
