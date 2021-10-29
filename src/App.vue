<template>
  <h1>{{ message }}</h1>
  <TextField
    v-model="message"
    :count="count"
  />
  <button @click="count += 1">
    Increase
  </button>
</template>

<script>
import TextField from '~/components/TextField'

export default {
  components: {
    TextField
  },

  data () {
    return {
      message: 'Hello Vue SFC!',
      count: 7
    }
  }
}
</script>