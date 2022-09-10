import { createApp } from 'vue'
import UI, { colors } from '@indielayer/ui'
import App from './App.vue'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(UI, {
    prefix: 'X',
    theme: {
        classPrefix: 'x-',
        colors: {
            primary: colors.emerald,
            secondary: colors.slate,
            success: colors.green,
            warning: colors.yellow,
            error: colors.red
        }
    }
})

app.use(router)

app.mount('#app')