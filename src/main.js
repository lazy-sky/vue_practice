import { createApp } from 'vue'
import App from './App.vue'
import store from '~/store'
import router from '~/routes'
import '~/routes/guards'
import TheModal from '~/components/TheModal'

const app = createApp(App)

app.use(store)
app.use(router)

// 컴포넌트 전역 등록
app.component('TheModal', TheModal)

app.mount('#app')