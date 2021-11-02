<template>
  <h1>{{ message }}</h1>
  <HelloWorld class="active" />
  <TheButton />
</template>

<script>
import HelloWorld from '~/components/HelloWorld'
import TheButton from '~/components/TheButton'

export default {
  components: {
    HelloWorld,
    TheButton
  },

  data () {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>