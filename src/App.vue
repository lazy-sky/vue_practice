<template>
  <h1>{{ message }}</h1>
  <TextField
    message="message"
    :count="count"
    @sky="message = $event"
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