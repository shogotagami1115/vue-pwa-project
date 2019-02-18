<template>
  <div class="about-container">
    <h1>はじめに</h1>
    <div id="contents-wrapper">
      <h2>- PWAとは -</h2>
      <p>PWAは"Progressive Web Apps"の略で、モバイル向けのWEBサイトを、<br>スマホアプリのように動かすことができる技術の総称。</p>
      <p>オフラインでもデータを表示させたり、プッシュ通知ができるようにする<br>ServiceWorkerを使って、PWA対応のサイトを作ることができる。</p>      
    </div>
    <div id="contents-wrapper">
      <h2>- PWAはすごい -</h2>
      <img src="../assets/pwa-link-img-min.png" class="img">
    </div>
    <div id="contents-wrapper">
      <h2>- PWA輪読会の参照元 -</h2>
      <p>PWAの良い書籍がなかったので、GoogleのPWA解説サイトをもとに輪読会(?)を実施。</p>
      <a href="https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ja">はじめてのプログレッシブ ウェブアプリ | Web | Google Developers</a>
    </div>
    <div id="contents-wrapper">
      <h2>- このデモサイトについて -</h2>
      <p>このサイト自体はPWAを体感できるためだけに作られているので悪しからず...。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped lang="scss">
.about-container {
  margin-top: 3rem;
  font-size: 1.2rem;
  h1 {
    font-weight: bold;
  }
  #contents-wrapper {
    margin: 0 auto;
    margin-top: 4rem;
    width: 800px;
    h2 {
      margin-bottom: 1rem;
    }
    .img {
      width: 100%;
    }
    p {
      line-height: 2.5rem;
    }
  }
}
</style>
