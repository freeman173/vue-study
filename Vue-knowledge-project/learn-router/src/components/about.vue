<template>
  <div>
    <h2>超哥在about页</h2>
  </div>
</template>

<script>
export default {
  name: "about",
    //vue生命周期的被动触发函数，不用写进methods里面。
    //该vue组件被创造时，被调用
    created() {
      console.log('about is created')
    },
    destroyed(){
      console.log('about is destoryed')
    },
  //该组件被重新激活时，被调用。它与created不可同时被调用
    activated(){
      console.log('about is activated')
    },
    deactivated(){
      console.log('about is deactivated')
    }
}
</script>

<style scoped>

</style>
