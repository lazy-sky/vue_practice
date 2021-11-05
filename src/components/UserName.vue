<template>
  <h1>{{ user.name }} / {{ depth }}</h1>
  <template v-if="user.children && user.children.length">
    <!-- 재귀 컴포넌트는 props에 등록하지 않는다 -->
    <UserName
      v-for="u in user.children"
      :key="u.id"
      :user="u"
      :depth="depth + 1"
    />
  </template>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    depth: {
      type: Number,
      default: 1
    }
  }
}
</script>