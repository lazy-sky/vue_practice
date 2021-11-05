<template>
  <slot name="activator">
  </slot>
  <template v-if="modelValue">
    <slot>
    </slot>
  </template>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>