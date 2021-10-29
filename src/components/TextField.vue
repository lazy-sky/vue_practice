<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <div>{{ count }}</div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },

    count: {
      type: Number,
      default: 0,
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>

<style>

</style>