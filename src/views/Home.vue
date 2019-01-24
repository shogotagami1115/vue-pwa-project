<template>
  <div class="home">
    <div id="logo-wrapper">
      <img src="../assets/logo.png" class="pwa">
    </div>
    <h1>PWA チュートリアル</h1>
    <p>~Vue.jsでPWAを作ってみた~</p>
    <div id="container">
      <p>(1)ServiceWorker</p>
      <ul>
        <router-link to="image_cache">キャッシュしてる</router-link>
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
}
</style>