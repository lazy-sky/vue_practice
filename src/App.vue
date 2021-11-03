<template>
  <h1 @click="updateMessage">
    {{ message }}
  </h1>
  <h2>{{ reversedMessage }}</h2>
  <input
    v-model="message"
    type="text"
  />
  <RouterView />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('message', [
      'reversedMessage'
    ]),

    message: {
      get() {
        return this.$store.state.message.message
      },

      set(message) {
        this.$store.commit('message/assignState', {
          message
        })
      }
    }
  },

  methods: {
    ...mapActions('message', [
      'updateMessage'
    ])
  }
}
</script>