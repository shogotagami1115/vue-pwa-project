<template>
  <div class="push-notification">
    <main>
      <h1>PWAのプッシュ通知</h1>
      <div class="contants-wrapper">
        <h2>プッシュ通知ってなに？</h2>
        <p>プッシュ通知とは、ブラウザやアプリケーション上でユーザーへ送られる通知のこと。</p>
        <p>そう、こんな感じで。</p>
        <img src="../assets/push.gif" width="750" height="220" alt="GIF" border="0" align="center" hspace="10" vspace="10">
        <p class="note">【注意】2019年2月現在、PWAアプリケーションにおけるプッシュ通知がサポートされているのは、Androidのみです。</p>
        <p>今回はこのプッシュ通知の裏側のコード、動きについて簡単に説明します。</p>
      </div>
      <div id="line"></div>
      <div class="contants-wrapper">
        <h2>プッシュ通知のこれまで</h2>
        <p>プッシュ通知がブラウザに対応してきたのはここ最近のこと。</p>
        <p>もともとはスマホ向けが一般的で、ブラウザ対応してきたのは2017年4月ごろ。</p>
        <p>ブラウザの標準規格が確率したことがキッカケで、BoltzEngineが対応したという経緯。</p>
      </div>
      <div id="line"></div>
      <div class="contants-wrapper">
        <h2>プッシュ通知実装の仕組み・流れ</h2>
        <ul>
          <li>1.いまのブラウザがService Workerとプッシュ通知をサポートしているかどうか確認</li>

          <li>2.サポートしていたら<span class="code-inline-wrapper">sw.js</span> ファイルをSWとして登録する</li>
          <li>3.ユーザがプッシュ通知にすでに登録されているかどうかチェックする</li>
          <li>4.まだ登録されていなければ、プッシュ通知を送る対象としてユーザを登録する</li>
          <li>5.ごにょごにょする</li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PushNotification',
  data() {
    return{
      applicationServerPublicKey: 'BBBhurZMg4DsFrXa0dFu4irYqCJa9rsrVdMVVqP9Ah8NkzVOieQF7isS7BHrvf2daiu_0K7fYuA1HzjyDDUTHW8',
      pushButton: document.querySelector('.js-push-btn'),
      isSubscribed: false,
      swRegistration: "",
    }
  }
}
</script>

<style scoped lang="scss">
.push-notification {
  margin-top: 2rem;
  width: 800px;
  margin: 0 auto;
  h1 {
    margin: 2rem 0;
    font-weight: bold;
  }
  h2 {
    margin: 2rem 0;
  }
  .contants-wrapper {
    margin: 4rem 0;
    .note {
      color: lightcoral;
    }
  }
  #line {
    border-top: dotted 5px gray;
    width: 33%;
    margin: 0 auto;
  }
}
</style>
