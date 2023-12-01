<script setup lang="ts">
import { ConfigProvider } from 'vant'
</script>

<template>
  <ConfigProvider theme="light">
    <router-view></router-view>
  </ConfigProvider>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

#app {
  overflow: hidden;
}
</style>
