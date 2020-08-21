import Vue from 'vue'
import VueRouter from 'vue-router'
import GroupIndex from '../views/GroupIndex.vue'
import GroupShow from '../views/GroupShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: GroupIndex
  },
  {
    path: '/groups/:slug',
    name: 'Group',
    component: GroupShow,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
