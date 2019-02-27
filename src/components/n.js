import Vue from 'vue';
Vue.directive('n',{
  bind:function(el,bindind){
    el.textContent = Math.pow(bindind.value,2)
  },
  update:function(el,bindind){
    el.textContent = Math.pow(bindind.value,2)
  }
})