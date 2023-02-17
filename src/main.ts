import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue'
import router from '~/router/index'
import loadingDirective from '~/directives/vloading/index'
import 'vant/es/dialog/style'
import 'vant/es/toast/style'
// import '@unocss/reset/tailwind.css'
import './styles/reset.less'
import './styles/main.less'
import 'uno.css'

const pinia = createPinia()
pinia.use(piniaPersist)
const app = createApp(App)
app.directive('loading', loadingDirective)
app.use(router)
app.use(pinia)
app.mount('#app')
