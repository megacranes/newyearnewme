<template lang="pug">
.navigation-bar
  .logo
  .navigation-items-container
    navigation-item(v-for="item in navigationItems" :item="item" @nav-item-clicked="emitNavItemClicked")
</template>

<script>
import NavigationItem from './NavigationItem'

export default {
  name: 'NavigationBar',
  props: ['navigationItems', 'isMobile'],
  components: {
    NavigationItem
  },
  methods: {
    emitNavItemClicked (item) {
      this.$emit('nav-item-clicked', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigation-bar {
  overflow: hidden;
  width: 100%;

  .logo {
    float: left;
  }

  .navigation-items-container {
    float: right;
  }
}
</style>
