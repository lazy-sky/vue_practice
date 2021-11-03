<template>
  <h1 @click="updateMessage">
    {{ message }}
  </h1>
  <h2>{{ reversedMessage }}</h2>
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'

function mapState(moduleName, stateNames) {
  const res = {}

  stateNames.forEach(name => {
    res[name] = function () {
      return this.$store.state[moduleName][name]
    }
  })

  return res
}

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