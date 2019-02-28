<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #code {
    text-align: left;
    margin: 0 auto;
    width: 80%;
    background: #F7F7F7;
  }
  li {
    list-style-type: none;
  }
  .code-inline-wrapper {
    padding: .3rem;
    font-weight: bold;
    background: #f7f7f7;
  }
  .btn-square {
    font-weight: bold;
    margin: 2rem 0;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #4285F4;
    color: #FFF;
    border-bottom: solid 4px #6185F4;
    border-radius: 3px;
  }
  .btn-square:active {
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    border-bottom: none;
  }
}
</style>
