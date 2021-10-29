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

<style scoped>
/* 유효 범위를 현재 컴포넌트로 조정 */
button {
  background: none;
  background-color: gray;
  color: white;
  border: none;
}

button.primary {
  background-color:royalblue;
}

button.danger {
  background-color: red;
}
</style>