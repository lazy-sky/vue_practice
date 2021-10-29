<template>
  <button
    :class="{
      [name]: true,
      [size]: true,
    }"
  >
    <slot>Default Name!</slot>
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<style scoped lang="scss">
/* 유효 범위를 현재 컴포넌트로 조정 */
button {
  background: none;
  background-color: gray;
  color: white;
  border: none;

  &.sm {
    font-size: 13px;
  }

  &.lg {
    font-size: 19px;
    padding: 6px 12px;
  }

  &.primary {
    background-color:royalblue;
  }

  &.danger {
    background-color: red;  
  }
}


</style>