import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTheMask from 'vue-the-mask'

import App from './App.vue'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import SvgIcon from 'vue3-icon'

const app = createApp(App)

app.use(createPinia())
// @ts-ignore
app.use(VueTheMask)
app.use(Toast, {})
app.component('svg-icon', SvgIcon)
app.mount('#app')
