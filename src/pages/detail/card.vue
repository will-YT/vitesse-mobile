<script setup lang="ts">
// 初始化页面
</script>

<template>
  <ion-page>
    <ion-content>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
      <van-button type="primary">
        主要按钮
      </van-button>
      <van-button type="success">
        成功按钮
      </van-button>
      <van-button type="default">
        默认按钮
      </van-button>
      <van-button type="warning">
        警告按钮
      </van-button>
      <van-button type="danger">
        危险按钮
      </van-button>
      <RouterLink to="/detail/dd" class="text-36px">
        dd
      </RouterLink>
    </ion-content>
  </ion-page>
</template>

<style scoped lang="less">

</style>
