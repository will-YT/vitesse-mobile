<script setup lang="ts">
// 初始化页面
const load = ref(true)
const init = () => {
  setTimeout(() => {
    load.value = false
  }, 500)
}

onMounted(() => {
  init()
})
</script>

<template>
  <Loading v-if="load" />
  <div v-else class="text-center pt-60px">
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse mobile
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />
  </div>
</template>

<route lang="yaml">
meta:
  keepAlive:
    true
  title:
    ''
  useLayout:
    true
</route>

<style scoped lang="less">

</style>
