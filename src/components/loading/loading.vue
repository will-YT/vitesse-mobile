<script setup lang="ts">
// const { overLay = false } = defineProps<{
//   overLay?: boolean
// }>()
withDefaults(defineProps<{
  overLay?: boolean
}>(), {
  overLay: false,
})
</script>

<template>
  <div v-if="!overLay" class="loadiing h-100vh flex items-center justify-center">
    <van-loading size="32px" color="#0094ff" vertical />
  </div>
  <van-overlay v-else :show="true" class="cross-center">
    <van-loading size="32px" color="#0094ff" vertical />
  </van-overlay>
</template>

<style lang="less" scoped>

</style>
