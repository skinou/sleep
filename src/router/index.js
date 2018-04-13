import Vue from 'vue'
import Router from 'vue-router'
import start from '@/view/start'
import play from '@/view/play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    },
    {
      path: '/play',
      name: 'play',
      component: play
    }
  ]
})
