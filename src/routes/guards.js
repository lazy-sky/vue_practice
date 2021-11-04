import router from './index'

router.beforeEach((to, from) => {
  console.log(to, from)

  if (to.meta.auth) {
    // e.g., 로그인 확인 로직
    if (!localStorage.getItem('token')) {
      return '/signin'
    }
  }

  return true
})