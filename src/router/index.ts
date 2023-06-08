// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from '@ionic/vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'

const routes: any = []
function resolveRouter(route: any) {
  if (route?.meta?.layout) {
    if (!route?.meta?.layoutPlatform) {
      return setupLayouts([route])[0]
    }
    else {
      return route
    }
  }
  else {
    return route
  }
}
generatedRoutes.forEach((v) => {
  routes.push(resolveRouter(v))
})
console.log(routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(async (to, from, next: any) => {
  window.document.body.style.backgroundColor = '#fff'
  if (to.meta.bgColor) {
    (window.document as any).body.style.backgroundColor = to.meta.bgColor
  }
  if (to.meta.title) {
    (document as any).title = to.meta.title
  }
  next()
})
export default router
