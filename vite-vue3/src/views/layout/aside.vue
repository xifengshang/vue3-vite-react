<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        router
        @open="handleOpen"
        @close="handleClose"
      >
      <el-menu-item index="/">
          <el-icon><setting /></el-icon>
          <span>Home</span>
        </el-menu-item>
        <el-menu-item index="/manager/index">
          <el-icon><icon-menu /></el-icon>
          <span>ManagerIndex</span>
        </el-menu-item>
        <el-menu-item index="/manager/components">
          <el-icon><document /></el-icon>
          <span>ManagerComponents</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss">
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
</style>