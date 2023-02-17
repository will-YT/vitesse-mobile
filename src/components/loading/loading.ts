import './loading.less'
import Loading from './loading.vue'
let Instance: any = null
const mountNode = document.createElement('div')
mountNode.className = 'loading'
export const showLoading = () => {
  if (Instance)
    return
  Instance = createApp(Loading, { overLay: true })
  document.body.appendChild(mountNode)
  Instance.mount(mountNode)
}

export const closeLoading = () => {
  if (!Instance)
    return
  Instance.unmount()
  document.body.removeChild(mountNode)
}
