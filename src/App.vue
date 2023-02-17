<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'
const getFirstLevelRoute = (route: RouteLocationNormalized) => {
  if (!Array.isArray(route.matched) || route.matched.length === 0)
    return route.fullPath

  return route.matched[0].name
}
</script>

<template>
  <main class="color-base dark:text-gray-200">
    <Suspense>
      <van-config-provider :theme="isDark ? 'dark' : 'light'">
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" v-if="route.meta.keepAlive" :key="getFirstLevelRoute(route)" />
          </keep-alive>
          <component :is="Component" v-if="!route.meta.keepAlive" :key="getFirstLevelRoute(route)" />
        </router-view>
      </van-config-provider>
    </Suspense>
  </main>
</template>

<style lang="less" scoped>
</style>
