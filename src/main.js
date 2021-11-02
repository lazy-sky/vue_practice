import { createApp } from 'vue'
import App from './App.vue'
import { fetch } from '~/plugins'
import store from '~/store'

const app = createApp(App)

app.use(fetch, {
  endpoint: 'https://www.omdbapi.com'
})

app.use(store)
app.mount('#app')