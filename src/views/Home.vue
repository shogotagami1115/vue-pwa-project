<template>
  <div class="home">
    <div id="logo-wrapper">
      <img src="../assets/logo.png" class="pwa">
    </div>
    <h1>PWA チュートリアル</h1>
    <p>~Vue.jsでPWAを作ってみた~</p>
    <div class="contents-wrapper">
      <div id="container">
        <p>(1) はじめに</p>
        <router-link to="/about"><a>PWAとは</a></router-link>
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
          <li><router-link to="push_notification">プッシュ通知はこんな感じ！</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style lang="scss">
.home {
  #logo-wrapper {
    img {
      width: 400px;
    }
  }
  h1{
    font-size: 3rem;
  }
  .contents-wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
  }
}
</style>
