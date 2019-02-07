<template>
  <div class="push-notification">
    <h1>This is push notification!</h1>
    <p>
      <button disabled class="js-push-btn">
        Enable Push Messaging
      </button>
    </p>
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
  },
  methods: {
    urlB64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/-/g, '+').replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    },
    updateBtn() {
      if (Notification.permission === 'denied') {
        this.pushButton.textContent = 'Push Messaging Blocked.';
        this.pushButton.disabled = true;
        this.updateSubscriptionOnServer(null);
        return;
      }

      if (this.isSubscribed) {
        this.pushButton.textContent = 'Disable Push Messaging';
      } else {
        this.pushButton.textContent = 'Enable Push Messaging';
      }

      this.pushButton.disabled = false;
    },
    updateSubscriptionOnServer(subscription) {
      // TODO: Send subscription to application server

      const subscriptionJson = document.querySelector('.js-subscription-json');
      const subscriptionDetails =
        document.querySelector('.js-subscription-details');

      if (subscription) {
        subscriptionJson.textContent = JSON.stringify(subscription);
        subscriptionDetails.classList.remove('is-invisible');
      } else {
        subscriptionDetails.classList.add('is-invisible');
      }
    },
    subscribeUser() {
      const applicationServerKey = this.urlB64ToUint8Array(this.applicationServerPublicKey);
      this.swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
      })
      .then(function(subscription) {
        console.log('User is subscribed');

        this.updateSubscriptionOnServer(subscription);

        this.isSubscribed = true;

        this.updateBtn();
      })
      .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
        this.updateBtn();
      });
    },
    initializeUI() {
      this.pushButton.addEventListener('click', function() {
        this.pushButton.disabled = true;
        if (this.isSubscribed) {
          // TODO: Unsubscribe user
        } else {
          this.subscribeUser();
        }
      });

      // Set the initial subscription value
      this.swRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        this.isSubscribed = !(subscription === null);

        this.updateSubscriptionOnServer(subscription);

        if (this.isSubscribed) {
          console.log('User IS subscribed.');
        } else {
          console.log('User is NOT subscribed.');
        }

        this.updateBtn();
      });
    }
  },
  created() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported');

      navigator.serviceWorker.register('registerServiceWorker.js')
      .then(function(swReg) {
        console.log('Service Worker is registered', swReg);

        this.swRegistration = swReg;
        this.initializeUI();
      })
      .catch(function(error) {
        console.error('Service Worker Error', error);
      });
    } else {
      console.warn('Push messaging is not supported');
      this.pushButton.textContent = 'Push Not Supported';
    }
  }
}
</script>

<style scoped lang="scss">

</style>
