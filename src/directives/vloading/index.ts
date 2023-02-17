import type { DirectiveBinding } from 'vue'
import { createApp } from 'vue'
import Loading from './vloading.vue'

const relativeCls = 'relative'

function addClass(el: HTMLElement, className: string) {
  // 如果当前元素样式列表中没有className
  if (!el.classList.contains(className))
    el.classList.add(className)
}

function removeClass(el: HTMLElement, className: string) {
  el.classList.remove(className)
}
const loadingDirective = {
  name: 'loading',
  mounted(el: HTMLElement & { instance: any } & { saveHtml: any }, binding: DirectiveBinding) {
    const app = createApp(Loading)
    const instance = app.mount(document.createElement('div'))
    el.instance = instance
    el.saveHtml = el.innerHTML
    const title = binding.arg

    if (typeof title !== 'undefined')
      (instance as any).setColor(title)

    if (typeof binding.value === 'object' && binding.value !== null && binding.value.text)
      (instance as any).setColor(binding.value.text)

    if (binding.value) {
      if (typeof binding.value === 'boolean')
        append(el)
      if (typeof binding.value === 'object' && binding.value !== null) {
        if (binding.value.value)
          append(el)
      }
    }
  },
  updated(el: HTMLElement & { instance: any } & { saveHtml: any }, binding: DirectiveBinding) {
    const title = binding.arg

    if (typeof title !== 'undefined')
      el.instance.setColor(title)

    if (binding.value !== binding.oldValue) {
      // bool的情况
      if (typeof binding.value === 'boolean')
        binding.value ? append(el) : remove(el)

      // object的情况
      if (typeof binding.value === 'object' && binding.value !== null)
        binding.value.value ? append(el) : remove(el)
    }
  },
}

function append(el: HTMLElement & { instance: any }) {
  el.innerHTML = ''
  const style = getComputedStyle(el)
  if (!['absolute', 'fixed', 'relative'].includes(style.position))
    addClass(el, relativeCls)

  el.appendChild(el.instance.$el)
}

function remove(el: HTMLElement & { instance: any } & { saveHtml: any }) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
  el.innerHTML = el.saveHtml
}

export default loadingDirective
