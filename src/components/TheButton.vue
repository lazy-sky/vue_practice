<template>
  <button type="butotn">
    <slot>
    </slot>
  </button>
</template>

<script>
import sample from '~/mixins/sample'

export default {
  mixins: [sample],
  inheritAttrs: false
}
</script>