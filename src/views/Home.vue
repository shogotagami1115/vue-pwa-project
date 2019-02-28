<template>
  <div class="home">
    <div id="logo-wrapper">
      <img src="../assets/logo.png" class="pwa">
    </div>
    <h1>PWA チュートリアル</h1>
    <div class="contents-wrapper">
      <div id="container" class="container">
        <p id="title">(1)このサイトについて</p>
        <ul>
          <router-link to="about">はじめに</router-link>
        </ul>
      </div>
      <div id="container" class="container">
        <p>(2)オフラインApps</p>
        <ul>
          <router-link to="image_cache">画像ページ</router-link>
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
  .container {
    margin: 0 10px;
  }
  .contents-wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
