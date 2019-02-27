<template>
  <div class="about-container">
    <h1>プッシュ通知</h1>
    <div id="contents-wrapper">
      <h2>- プッシュ通知とは -</h2>
      <p>みなさまおなじみプッシュ通知。説明するまでもないですね。</p>
      <p>これもPWA(ServiceWorker)を使うことによって、比較的簡単に実装ができちゃう。</p>
    </div>
    <div id="contents-wrapper">
      <h2>- プッシュ通知とは -</h2>
      <p>みなさまおなじみプッシュ通知。説明するまでもないですね。</p>
      <p>これもPWA(ServiceWorker)を使うことによって、比較的簡単に実装ができちゃう。</p>
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
