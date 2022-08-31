import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from './components/fragments/PageTitle.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('page-title', PageTitle).mount('#app')
