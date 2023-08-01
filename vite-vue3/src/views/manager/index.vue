<template>
  <div @click="getMusic">{{ userStore.name }}</div>
</template>
<script setup lang="ts">
import axios from 'axios'

import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const getMusic = () => {
  axios.get('http://openapi.music.163.com/openapi/music/basic/playlist/oftag/get/v2').then(response => {
      console.log(response.data)
    }).catch(error => {
      console.error(error)
    })
}
</script>
<style lang="sass">

</style>