<template>
  <div id="app">
    <div id="logo-wrapper">
      <img src="./assets/logo.png" class="pwa">
    </div>
    <h1>PWA チュートリアル</h1>
    <p>~Vue.jsでPWAを作ってみた~</p>

    <div id="container">
      <p>(1)ServiceWorker</p>
      <ul>
        <li><a href="#" target="_blank">キャッシュしてる</a></li>
        <li><a href="#" target="_blank">キャッシュしてない</a></li>
      </ul>
    </div>
    <div id="container">
      <p>(2)オフラインApps</p>
      <ul>
        <li><a href="#" target="_blank">オンラインで動くところ</a></li>
        <li><a href="#" target="_blank">オンラインで動かないところ</a></li>
      </ul>
    </div>
    <div id="container">
      <p>(3)プッシュ通知</p>
      <ul>
        <li><a href="#" target="_blank">プッシュ通知はこんな感じ！</a></li>
      </ul>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

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
