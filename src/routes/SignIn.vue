<template>
  <input
    v-model="id"
    type="text"
  />
  <input
    v-model="pw"
    type="password"
  />
  <button
    type="button"
    @click="signIn"
  >
    로그인
  </button>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      pw: ''
    }
  },

  methods: {
    async signIn() {
      const userToken = '1234abcd'

      localStorage.setItem('token', userToken)

      this.$router.push('/')
    }
  }
}
</script>