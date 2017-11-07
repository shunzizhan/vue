<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <select name="" id="" v-model="curLang" @change="changeLang()">
      <option value="zh">中文</option>
      <option value="en">英文</option>
    </select>
    <h1>{{title}}</h1>
    <p>{{$t('userInfo.name')}}</p>
    <p>{{$t('message.msg')}}</p>
    <vc-message class="hh" :message="$t('ss')" @changeMsg = 'setMessage'></vc-message>
  </div>
</template>

<script src='./a'></script>

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
