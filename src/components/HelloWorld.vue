<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-html="msg2" v-bind:xxx="xxx"></h1>
    <div v-n="n">1111</div>
    <div>道高一尺：{{nn}}</div>
    <ul>
      <li v-for="one in arr">{{one}}</li>
    </ul>
    <ul>
      <template v-for="one in arr">
        <li>***</li>
        <li>{{one}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  //这个是组件的名字
  name: 'HelloWorld222',
  props: {
    //这里的string是什么意思呢？
    msg: String
  },
  //这里data是个方法，es6
  //这里为什么不能直接是data:{} 这样子写呢，是因为涉及多实例共享同个数据的问题
  data:function(){
    return {
      msg2:'<div style="color:red">123</div>',
      xxx:'haha',
      n:8,
      arr:['aaa','bbb']
    }
  },
  computed:{
    nn:function(){
      return this.n+10000
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
