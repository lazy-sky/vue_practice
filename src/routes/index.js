import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
  history: createWebHashHistory(),
  routes: [ // 페이지들
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})