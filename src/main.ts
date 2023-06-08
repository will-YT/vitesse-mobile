import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'
import router from '~/router/index'
import loadingDirective from '~/directives/vloading/index'
import 'vant/es/dialog/style'
import 'vant/es/toast/style'
import '@unocss/reset/tailwind-compat.css'
import './styles/main.less'
import 'uno.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

const config = {
  mode: 'ios',
}
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.directive('loading', loadingDirective)
app.use(router)
app.use(pinia)
app.use(IonicVue, config)
app.mount('#app')
