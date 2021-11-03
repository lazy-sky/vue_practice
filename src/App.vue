<template>
  <h1 @click="updateMessage">
    {{ message }}
  </h1>
  <h2>{{ reversedMessage }}</h2>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.message.message
    },

    reversedMessage() {
      return this.$store.getters['message/reversedMessage']
    }
  },

  methods: {
    updateMessage() {
      this.$store.dispatch('message/updateMessage')
    }
  }
}
</script>