import Vue from 'vue'
import App from './App.vue'

import plUI from './index.js'
Vue.use(plUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
