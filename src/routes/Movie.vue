<template>
  <h1>Movie page!</h1>
  <h2>{{ $route.params.sky }}</h2>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    this.fetchMovie()  
  },

  methods: {
    async fetchMovie() {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&i=${this.$route.params.sky}`)
      console.log(data)
    }
  }
}
</script>