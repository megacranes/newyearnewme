<template lang="pug">
.navigation-bar
  .logo
  .navigation-items-container
    navigation-item(v-for="item in navigationItems" :key="item.navigationName" :item="item" @nav-item-clicked="emitNavItemClicked")
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
  width: calc(100% - 40px);
  position: fixed;
  padding: 15px 20px;
  z-index: 10;

  .logo {
    float: left;
  }

  .navigation-items-container {
    float: right;
  }
}
</style>
