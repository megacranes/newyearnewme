<template lang="pug">
  router-view
</template>

<script>
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-119417783-1',
  checkDuplicatedScript: true,
  autoTracking: {
    screenview: true,
    pageviewOnLoad: false
  }
})

export default {
  name: 'app'
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow-y: scroll;
}
</style>
