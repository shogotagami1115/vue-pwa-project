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
        <p class="note"><a href="https://medium.com/@takeshiamano/ios%E3%81%AE11-3%E3%81%8B%E3%82%89%E3%81%AEpwa%E5%AF%BE%E5%BF%9C%E3%81%A7%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%9F%E3%81%93%E3%81%A8-313f638a172b">こちらの記事で</a>できること・できないことが説明されています。ちょっと古いですが。</p>
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
        <h2>プッシュ通知実装のおおまかな流れ</h2>
        <ul>
          <li>1.ユーザが使っているブラウザがService Workerとプッシュ通知をサポートしているかどうか確認</li>
          <li>2.サポートしていたら<span class="code-inline-wrapper">sw.js</span> ファイルをSWとして登録する</li>
          <li>3.ユーザがプッシュ通知にすでに登録されているかどうかチェックする</li>
          <li>4.まだ登録されていなければ、プッシュ通知を送る対象としてユーザを登録する</li>
          <li>5.ごにょごにょする</li>
        </ul>
      </div>
      <div id="line"></div>
      <button class="btn-square" @click="toggleSw()">(1) ユーザが対象のページにきたとき</button>
      <div v-if="isOpenSw">
        <p>そのユーザがSWとプッシュ通知をサポートしているブラウザを利用しているかどうかチェック</p>
        <p>対応しているブラウザを使っていれば、<span class="code-inline-wrapper">sw.js</span> を SWとして登録する</p>
        <div id="code">
          <pre>
            <code>
            if ('serviceWorker' in navigator && 'PushManager' in window) {
              console.log('Service Worker and Push is supported');

              navigator.serviceWorker.register('sw.js')
              .then(function(swReg) {
                console.log('Service Worker is registered', swReg);

                swRegistration = swReg;
              })
              .catch(function(error) {
                console.error('Service Worker Error', error);
              });
            } else {
              console.warn('Push messaging is not supported');
              pushButton.textContent = 'Push Not Supported';
            }
            </code>
          </pre>
        </div>
      </div>
      <div id="line"></div>
      <button class="btn-square" @click="toggleRegister()">(2) ユーザがプッシュ通知登録済みかどうか</button>
      <div v-if="isOpenRegister">
        <p>「XXの通知を受け取りますか？」で「はい」を押したユーザはすでに登録された、ということ</p>
        <p>すでに対象のユーザが登録されているかどうか、で処理を分けて行う</p>
        <p>この場合は <span class="code-inline-wrapper">initialiseUI()</span>がその確認の処理の関数</p>
        <div id="code">
          <pre>
            <code>
            function initialiseUI() {
              // Set the initial subscription value
              swRegistration.pushManager.getSubscription()
              .then(function(subscription) {
                isSubscribed = !(subscription === null);

                if (isSubscribed) {
                  console.log('User IS subscribed.');
                } else {
                  console.log('User is NOT subscribed.');
                }

                updateBtn();
              });
            }
            </code>
          </pre>
        </div>
        <div id="line"></div>
      </div>
      <div v-if="isOpenRegister">
        <h2>ユーザが登録されていない場合</h2>
        <p>( = まだプッシュ通知をONにしていない場合)</p>
        <p>chromeの場合は左上に にょきっとでてくるアレを出して、選択に応じてON/OFFを切り替えます</p>
        <img src="../assets/pus_img.png" width="750" height="580" alt="GIF" border="0" align="center" hspace="10" vspace="10">
      </div>
      <div id="line"></div>
      <button class="btn-square" @click="togglePush()">(3) プッシュ通知を送る！！！</button>
      <div v-if="isOpenPush">
        <h2>ここではお試しはできません。ごめんなさい。</h2>
        <p>これまでの処理であったように、対象のユーザがプッシュ通知の対象として登録されると、</p>
        <p>ServiceWokerがいい感じに裏側で働いてくれるので、あとはプッシュ通知を送信するだけでいい、というわけです！(勢い)</p>
        <br>
        <div id="line"></div>
        <br>
        <h2>いまどき Push.js なるものもあります</h2>
        <img src="../assets/push_js.png" width="750" height="300" alt="GIF" border="0" align="center" hspace="10" vspace="10">
        <p>ただし、デスクトップブラウザが対象なので、スマホの場合はSWをつかってプッシュ通知を使うほうがいいかと思いました。</p>
        <div id="line"></div>
        <h2>最後に</h2>
        <p>プッシュ通知の実装についても<a href="https://developers.google.com/web/fundamentals/codelabs/push-notifications/?hl=ja">Googleが詳細に説明</a>してくれています。</p>
        <p>Q**taでも多くの説明記事があるのですが、信憑性が薄い記事が多いのでご注意ください...。</p>
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
      isOpenSw: false,
      isOpenRegister: false,
      isOpenPush: false,
    }
  },
  methods: {
    toggleSw(){
      this.isOpenSw = !this.isOpenSw
    },
    toggleRegister(){
      this.isOpenRegister = !this.isOpenRegister
    },
    togglePush() {
      this.isOpenPush = !this.isOpenPush
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
    li {
      line-height: 3rem;
    }
  }
  #line {
    border-top: dotted 5px gray;
    width: 33%;
    margin: 0 auto;
  }
}
</style>
