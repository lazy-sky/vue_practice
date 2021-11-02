import { createApp } from 'vue'

import App from './App.vue'

import { fetch } from '~/plugins'

const app = createApp(App)

app.use(fetch, {
  endpoint: 'https://www.omdbapi.com'
})

app.mount('#app')