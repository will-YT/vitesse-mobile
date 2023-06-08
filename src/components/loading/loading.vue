<script setup lang="ts">
// const { overLay = false } = defineProps<{
//   overLay?: boolean
// }>()
withDefaults(defineProps<{
  overLay?: boolean
  show?: boolean
}>(), {
  overLay: false,
})
</script>

<template>
  <div v-if="!overLay" class="loading h-100vh flex items-center justify-center">
    <van-loading size="32px" color="#0094ff" vertical />
  </div>
  <van-overlay v-else :show="show" class="cross-center z-12">
    <van-loading size="32px" color="#0094ff" vertical />
  </van-overlay>
</template>

<style lang="less" scoped>

</style>
