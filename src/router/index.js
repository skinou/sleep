import Vue from 'vue'
import Router from 'vue-router'
import start from '@/view/start'
import play from '@/view/play'
import text from '@/view/text'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'start',
    //   component: start
    // },
    {
      path: '/',
      name: 'text',
      component: text
    },
    {
      path: '/play',
      name: 'play',
      component: play
    }
  ]
})
