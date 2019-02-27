<template>
  <div class="com">
     我是子组件，{{age}}
  </div>
</template>

<script>
export default {
  props:['age']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
