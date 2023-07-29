<template>
  <div class="main-content">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Aside from './aside.vue'
</script>
<style lang="scss">
  .main-content {
    height: 100%;
    .el-container {
      height: 100%;
    }
    .el-menu {
      height: 100%;
    }
  }
</style>