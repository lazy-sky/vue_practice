<template>
  <h1>{{ user.name }}</h1>
  <template v-if="user.children && user.children.length">
    <UserName
      v-for="u in user.children"
      :key="u.id"
      :user="u"
    />
  </template>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>