<template lang="pug">
.navigation-bar
  .logo

  .request-quote
    button.button.action-item-btn.small
      span Get a Quote

  .navigation-items-container
    navigation-item(v-for="item in navigationItems" :key="item.navigationName" :item="item" @nav-item-clicked="emitNavItemClicked")
</template>

<script>
import NavigationItem from './NavigationItem'

const EVENTS = {
  NAV_ITEM_CLICKED: 'nav-item-clicked',
  TOGGLE_PHONE: 'toggle-phone'
}

export default {
  name: 'NavigationBar',
  props: ['navigationItems', 'isMobile'],
  components: {
    NavigationItem
  },
  methods: {
    emitNavItemClicked (item) {
      this.$emit(EVENTS.NAV_ITEM_CLICKED, item)
    },
    togglePhone () {
      this.$emit(EVENTS.TOGGLE_PHONE)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'src/style/colors';
@import 'src/style/variables';
@import 'src/style/fonts';
@import 'src/style/icons';
@import 'src/style/buttons';

.navigation-bar {
  overflow: hidden;
  width: calc(100% - 40px);
  position: fixed;
  display: block;
  padding: 15px;
  z-index: 10;
  height: $desktop-header-height;
  vertical-align: middle;

  .logo {
    float: left;
  }

  .request-quote {
    float: right;
  }

  .navigation-items-container {
    float: right;
  }

  .phone {
    float: right;
  }
}
</style>
