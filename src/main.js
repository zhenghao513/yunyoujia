import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// Toast
import { Toast } from 'vant'
import 'vant/es/toast/style'

// Dialog
import { Dialog } from 'vant'
import 'vant/es/dialog/style'

// Notify
import { Notify } from 'vant'
import 'vant/es/notify/style'

// ImagePreview
import { ImagePreview } from 'vant'
import 'vant/es/image-preview/style'
import 'amfe-flexible'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')

app.config.globalProperties.Toast = Toast
app.config.globalProperties.Dialog = Dialog
app.config.globalProperties.Notify = Notify
app.config.globalProperties.ImagePreview = ImagePreview
