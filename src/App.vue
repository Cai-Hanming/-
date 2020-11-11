<template>
  <div id="app">
  <router-view></router-view>

  </div>
</template>

<script>
//import home from '../src/pages/home'
export default {
  name: 'App',
}
</script>

<style>
html,body{
margin:0;padding: 0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
.van-row{
  background-color: #ffffff;
  padding-bottom: 1.333333rem;
  padding-top:1.6rem;
}
.van-checkbox__icon{
 margin:0 auto; 
}
</style>
