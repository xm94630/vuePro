<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ev/>
    <com :age='age'/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import "./components/n"
import ev  from './components/events.vue'
import com from './components/com.vue'
export default {
  name: 'app',
  components: { //自定义组件需要在这里添加才能用
    HelloWorld,
    ev,
    com,  
  },
  data:function(){
    return{
      age:'100岁'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
