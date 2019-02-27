<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ev/>
    {{age}}
    <com :age='age' @xxx='yyy' />
    <!--<vuexx />-->
    <pagea />
    <pageb />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import "./components/n"
import ev  from './components/events.vue'
import com from './components/com.vue'
//import vuexx from './components/vuex.vue'

import pagea from './components/a.vue'
import pageb from './components/b.vue'

export default {
  name: 'app',
  components: { //自定义组件需要在这里添加才能用
    HelloWorld,
    ev,
    com,  
    //vuexx
    pagea,
    pageb,
  },
  data:function(){
    return{
      age:'100'
    }
  },
  methods:{
    yyy:function(msg){
      this.age++;
      console.log(msg)
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
