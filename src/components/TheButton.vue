<template>
  <button
    :class="{
      [name]: true
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>