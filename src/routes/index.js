import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import MovieTitle from './MovieTitle'
import MoviePoster from './MoviePoster'

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
    },
    {
      path: '/movies/:sky',
      component: Movie,
      children: [
        {
          name: 'MovieTitle',
          path: 'title',
          component: MovieTitle
        },
        {
          name: 'MoviePoster',
          path: 'poster',
          component: MoviePoster
        }
      ]
    }
  ]
})