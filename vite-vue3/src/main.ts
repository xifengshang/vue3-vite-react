import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import pinia from './store'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)

app.mount('#app')
