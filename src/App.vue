<template>
  <div id="app">
    <Header></Header>
    <div id="logo-wrapper">
      <img src="./assets/logo.png" class="pwa">
    </div>
    <h1>PWA チュートリアル</h1>
    <p>~Vue.jsでPWAを作ってみた~</p>

    <div id="container">
      <first-view></first-view>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstView from './components/FirstView.vue'
export default {
  name: 'App',
  components: {
    Header,
    FirstView
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  li {
    list-style-type: none;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
