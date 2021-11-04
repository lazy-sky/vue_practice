import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import MovieHeader from './MovieHeader'
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
          components: {
            MovieHeader,
            default: MovieTitle
          }
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