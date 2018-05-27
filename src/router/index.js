import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    }
  ]
})
