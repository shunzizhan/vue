<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <h1>{{title}}</h1>
    <!-- <vc-message :message = 'message'></vc-message> -->
  </div>
</template>

<script>
  export default {
  name: 'app',
  data () {
    return {
      title: '标题',
      message: '这是子组件'
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
