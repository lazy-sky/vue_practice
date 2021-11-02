<template>
  <div :class="{ active: isActive }">
    Hellow World
  </div>
</template>

<script>
export default {
  props: {
    
  },
}
</script>

<style lang="scss" scoped>
div {
  &.active {
    color: red;
  }
}
</style>