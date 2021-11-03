<template>
  <h1 @click="updateMessage">
    {{ message }}
  </h1>
  <h2>{{ reversedMessage }}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('message', [
      'message',
      'msg'
    ]),

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