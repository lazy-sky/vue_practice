<template>
  <h1>Page Not Found!</h1>
  <RouterLink to="/">
    메인페이지로 이동! (라우터)
  </RouterLink>
  <button @click="$router.push('/')">
    메인페이지로 이동! (버튼)
  </button>
</template>
