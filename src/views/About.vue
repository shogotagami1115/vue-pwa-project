<template>
  <div class="about-container">
    <h1>はじめに</h1>
    <div id="contents-wrapper">
      <h2>- PWAとは -</h2>
      <p>PWAとは"Progressive Web Apps"の略で、WEBサイトを、<br>スマホアプリのように動かすことができるブラウザの裏側の技術の総称。</p>
      <p>オフラインでもキャッシュされたデータを表示させたり、高速にデータを表示させることがでいる。</p>
      <p>PWAとはいっても、"ServiceWorker" を使って進めていくので、ほとんどServiceWokerが中心です。</p>
    </div>
    <div id="contents-wrapper">
      <h2>- PWAはすごい -</h2>
      <img src="../assets/pwa-link-img-min.png" class="img">
      <p>なんか早いらしい</p>
    </div>
    <div id="contents-wrapper">
      <h2>- PWA輪読会の参照元 -</h2>
      <p>PWAの良い書籍がなかったので、GoogleのPWA解説サイトをもとに輪読会(?)を実施。</p>
      <a href="https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ja">はじめてのプログレッシブ ウェブアプリ | Web | Google Developers</a>
      <p>このほかにもGoogleが出しているチュートリアルなどもあるので是非ご参照ください。</p>
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
  font-size: 1.5rem;
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
