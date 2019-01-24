<template>
  <div id="app">
    <Header></Header>
    <FirstView v-if="isFirstView"></FirstView>
    <ServiceWorker v-if="isServiceWorker"></ServiceWorker>
    <OfflineApps v-if="isOfflineApps"></OfflineApps>
    <PushNotification v-if="isPushNotification"></PushNotification>
    <Tutorial v-if="isTutorial"></Tutorial>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstView from './components/FirstView.vue'
import ServiceWorker from './components/ServiceWorker.vue'
import OfflineApps from './components/OfflineApps.vue'
import PushNotification from './components/PushNotification.vue'
import Tutorial from './components/Tutorial.vue'
export default {
  name: 'App',
  components: {
    Header,
    FirstView,
    ServiceWorker,
    OfflineApps,
    PushNotification,
    Tutorial,
  }
}
</script>

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
</style>
