<template>
  <div id="app">
    <Header></Header>
    <div id="main-container">
      <router-view/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  li {
    list-style-type: none;
  }
  #main-container {
    margin-top: 10rem;
    z-index: 1;
  }
  .code-block-wrapper {
    width: 80%;
    padding: 1.5rem;
    background: #f7f7f7;
    margin: 0 auto;
    text-align: left;
  }
  .code-inline-wrapper {
    padding: .3rem;
    font-weight: bold;
    background: #f7f7f7;
  }
}
</style>
