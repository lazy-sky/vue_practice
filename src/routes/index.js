import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'
import MovieHeader from './MovieHeader'
import MovieTitle from './MovieTitle'
import MoviePoster from './MoviePoster'
import SignIn from './SignIn'


export default createRouter({
  history: createWebHistory(),
  routes: [ // 페이지들
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About,
      meta: {
        auth: true
      }
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/movies/:sky',
      component: Movie,
      redirect: { name: 'MovieTitle' },
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