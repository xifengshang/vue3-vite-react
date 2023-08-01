<template>
  <div @click="getMusic">manager</div>
</template>
<script setup lang="ts">
import axios from 'axios'

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