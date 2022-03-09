<template>
  <div>
    <h2>超哥在Profile</h2>
<!--    将query中的参数遍历出来-->
    <p v-for="item in $route.query">{{item}}</p>
  </div>

</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>

</style>
