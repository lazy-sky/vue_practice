<template>
  <h1 @click="updateMessage">
    {{ message }}
  </h1>
  <h2>{{ reversedMessage }}</h2>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('message', [
      'message',
      'msg'
    ]),

    ...mapGetters('message', [
      'reversedMessage'
    ])
  },

  methods: {
    ...mapActions('message', [
      'updateMessage'
    ])
  }
}
</script>