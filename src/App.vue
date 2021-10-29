<template>
  <h1>{{ message }}</h1>
  <TextField
    v-model="message"
    :count="count"
  />
  <TheButton
    name="primary"
    @click="count +=1"
  >
    Increase
  </TheButton>
  <TheButton
    name="danger"
    size="lg"
    @click="count -=1"
  >
    <template #default>
      New Button
    </template>
    <template #label="{ size, btnName }">
      New Label / {{ size }} / {{ btnName }} 
    </template>
  </TheButton>
  
  <TheButton />
  <button>Normal Button</button>
</template>

<script>
import TextField from '~/components/TextField'
import TheButton from '~/components/TheButton'

export default {
  components: {
    TextField,
    TheButton
  },

  data () {
    return {
      message: 'Hello Vue SFC!',
      count: 7
    }
  }
}
</script>