<template>
  <div class="a">
     组件a {{$store.state.money.money}}
     <button @click="add">加</button>
     <button @click="reduce">减</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods:mapActions('money', ['add','reduce'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
