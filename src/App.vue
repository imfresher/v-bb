<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="0">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">
        <RouterLink to="/">Builder</RouterLink>
      </el-menu-item>
      <el-menu-item index="2">
        <RouterLink to="/home">Home</RouterLink>
      </el-menu-item>
      <el-menu-item index="3">
        <RouterLink to="/about">About</RouterLink>
      </el-menu-item>
    </el-menu>
  </header>

  <RouterView />
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 30px;
  height: 30px;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
