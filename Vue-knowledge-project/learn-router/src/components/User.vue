<template>
  <div>
  <h2>我是用户界面</h2>
    <p>{{userId}}在用户界面</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      //$route代表当前使用的路由对象，是$router的下级，通过它，获取对应参数。
      return this.$route.params.userId
    }
  }


}
</script>

<style scoped>

</style>
