<template>
  <h1>Movie page!</h1>
  <RouterLink to="title">
    Title
  </RouterLink>
  <RouterLink to="poster">
    Poster
  </RouterLink>
  <RouterView
    :title="title"
    :poster="poster"
  />
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      poster: ''
    }
  },

  watch: {
    $route() {
      this.fetchMovie()
    }
  },

  created() {
    this.fetchMovie()  
  },

  methods: {
    async fetchMovie() {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&i=${this.$route.params.sky}`)
      console.log(data)
      this.title = data.Title
      this.poster = data.Poster
    }
  }
}
</script>