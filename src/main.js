import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyB6GrUgnbWKmhORflZn-LTF3MBF1yHxPIY",
  authDomain: "pwa-project-2be48.firebaseapp.com",
  databaseURL: "https://pwa-project-2be48.firebaseio.com",
  projectId: "pwa-project-2be48",
  storageBucket: "pwa-project-2be48.appspot.com",
  messagingSenderId: "848971603576"
}
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

