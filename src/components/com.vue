<template>
  <div class="com">
     我是子组件，{{age}}
     <button type="button" name="点我下，控制父组件" @click="$emit('xxx','兰陵王')">点击</button>
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
