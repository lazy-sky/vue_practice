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

<style>
/* 일반 버튼 태그에도 영향을 주고 있다 */
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