import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ImageCache from './views/ImageCache'
import PushNotification from './views/PushNotification'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/image_cache',
      name: 'image_cache',
      component: ImageCache
    },
    {
      path: '/push_notification',
      name: 'push_notification',
      component: PushNotification
    }
  ]
})
