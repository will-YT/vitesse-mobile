import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteLocationNormalized } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'

const routes: any = []
generatedRoutes.forEach((v: any) => {
  routes.push(v?.meta?.useLayout === true ? setupLayouts([v])[0] : v)
})
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  window.document.body.style.backgroundColor = '#fff'
  if (to.meta.bgColor)
    (window.document as any).body.style.backgroundColor = to.meta.bgColor
  if (to.meta.title)
    (document as any).title = to.meta.title
  next()
})
export default router
