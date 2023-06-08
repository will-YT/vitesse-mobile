import './loading.less'
import Loading from './Loading.vue'

let instance: any = null
const mountNode = document.createElement('div')
mountNode.className = 'loading'
function initInstance() {
  const Wrapper = {
    setup() {
      const show = ref(true)
      const toggle = (value: boolean) => {
        show.value = value
      }
      const open = () => {
        toggle(true)
      }
      const close = () => {
        toggle(false)
      }
      const currentInstance = getCurrentInstance()
      if (currentInstance) {
        Object.assign(currentInstance.proxy as object, { open, close })
      }
      return () => h(Loading, { overLay: true, show: show.value })
      // 返回渲染函数
    },
  }
  const app = createApp(Wrapper)
  document.body.appendChild(mountNode)
  instance = app.mount(mountNode)
}
export function showLoading() {
  if (!instance) {
    initInstance()
  }
  instance.open()
}
export function closeLoading() {
  instance.close()
}
