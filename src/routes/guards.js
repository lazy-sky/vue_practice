import router from './index'

router.beforeEach((to, from) => {
  console.log(to, from)

  // if() {
  //   return false
  // }

  return true
})