<script setup lang="ts">
const router = useRouter()
const index = () => {
  router.push({ path: '/' })
}
const detail = () => {
  router.push({ path: '/detail' })
}
</script>

<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" v-if="route.meta.keepAlive" :key="route.fullPath" />
      </keep-alive>
      <component :is="Component" v-if="!route.meta.keepAlive" :key="route.fullPath" />
    </router-view>
    <div class="text-center">
      <van-button class="mr-30px" @click="index">
        index
      </van-button>
      <van-button @click="detail">
        detail
      </van-button>
    </div>
    <div class="flex items-center justify-center mt-5 mx-auto text-center opacity-75 dark:opacity-50 text-sm">
      [Layout]
      <div class="icon-btn text-30px ml-10px" @click="toggleDark()">
        <div dark:i-carbon-moon i-carbon-sun />
      </div>
    </div>
  </main>
</template>
