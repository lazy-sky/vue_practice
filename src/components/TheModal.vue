<template>
  <slot
    name="activator"
    :attrs="{ onclick:onModal }"
  >
  </slot>
  <teleport to="body">
    <template v-if="modelValue">
      <div
        class="modal"
        @click="offModal"
      >
        <div
          class="modal-box"
          @click.stop="modelValue"
        >
          <slot>
          </slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    
    persistent: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue'],

  watch: {
    modelValue(newValue) {
      if (newValue) {
        window.addEventListener('keyup', this.escHandler)
      } else {
        window.removeEventListener('keyup', this.escHandler)
      }
    }
  },

  methods: {
    escHandler(event) {
      if (event.key === 'Escape') {
        this.offModal()
      }
    },

    onModal() {
      this.$emit('update:modelValue', true)
    },

    offModal() {
      if (this.persistent) return

      this.$emit('update:modelValue', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(black, .4);  

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-box {
    width: 400px;
    background-color: white;
    border: 4px solid;
  }
}
</style>