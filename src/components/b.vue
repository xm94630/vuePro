<template>
  <div class="b">
     组件b {{$store.state.count.count}}
     <button @click="add(2)">加+2</button>
     <button @click="reduce">减</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:mapActions('count', ['add','reduce'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
