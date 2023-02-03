import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import './style.css'

const app = createApp(App)

app.use(router)

app.use(VueTippy)

app.mount('#app')