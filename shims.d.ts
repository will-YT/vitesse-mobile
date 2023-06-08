declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'weixin-js-sdk' {
  const type : any
  export default type
}
declare module 'postcss-px-to-viewport' {
  const type : any
  export default type
}
