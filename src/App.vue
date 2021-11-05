<template>
  <TheHeader />
  <!-- <input
    v-model="searchText"
    type="text"
    @keyup.enter="fetchMovies"
  /> -->
  <div
    v-for="movie in movies"
    :key="movie.imdbID"
    @click="moveTo(movie.imdbID)"
  >
    {{ movie.Title }}
  </div>
  <RouterView />
  <UserName
    v-for="user in users"
    :key="user.id"
    :user="user"
  />
</template>

<script>
import axios from 'axios'
import TheHeader from '~/components/TheHeader'
import UserName from '~/components/UserName'
import names from '~/data/names.json'

export default {
  components: {
    TheHeader,
    UserName
  },

  data() {
    return {
      searchText: '',
      movies: [],
      users: names
    }
  },

  mounted() {

  },

  methods: {
    async fetchMovies() {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&s=${this.searchText}`)
      this.movies = data.Search
    },

    moveTo(id) {
      this.$router.push(`/movies/${id}`)
    }
  }
}
</script>