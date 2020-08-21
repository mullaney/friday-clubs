import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const groups = [
  {
    name: 'Dev Book Club',
    slug: 'dev-book-club',
    time: '1pm'
  },
  {
    name: 'Whisky Club',
    slug: 'whisky-club',
    time: '2pm-5pm'
  }
]

Vue.prototype.$appData = {
  groups
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
