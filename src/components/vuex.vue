<template>
  <div class="vuexx">
    <!--$store是在main页面传入的-->
    我是vuex {{$store.state.count}}  
    <button @click='increment'>增加</button>
    <button @click='decrement'>删除</button>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  methods: mapActions([
    'increment',
    'decrement'
  ]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
