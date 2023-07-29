<template>
  <div @click="getMusic">manager</div>
</template>
<script setup lang="ts">
import axios from 'axios'

const getMusic = () => {
  axios.get('https://api.apiopen.top/musicRankingsDetails?type=1').then(response => {
      console.log(response.data)
    }).catch(error => {
      console.error(error)
    })
}
</script>
<style lang="sass">

</style>