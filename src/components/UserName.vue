<template>
  <h1>{{ username }}</h1>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      default: ''
    }
  }
}
</script>