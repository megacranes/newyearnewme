<template lang="pug">
.navigation-bar(:style="navBarStyle")
  .logo
  .request-quote
    button.button.action-item-btn.small
      span Get a Quote

  .navigation-items-container
    navigation-item(
      v-for="item in navigationItems"
      :key="item.navigationName"
      :item="item"
      :currentlySelected="currentlySelected"
      @nav-item-clicked="emitNavItemClicked")
</template>

<script>
import NavigationItem from './NavigationItem'

const EVENTS = {
  NAV_ITEM_CLICKED: 'nav-item-clicked',
  TOGGLE_PHONE: 'toggle-phone'
}

const MAX_NAVBAR_TRANSPARENCY = 0.75

export default {
  name: 'NavigationBar',
  props: [
    'navigationItems',
    'isMobile',
    'currentlySelected'
  ],
  components: {
    NavigationItem
  },
  data () {
    return {
      navBarTransparency: 0,
      navBarStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0)'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll.bind(this))
  },
  destroy () {
    window.removeEventListener('scroll', this.updateScroll.bind(this))
  },
  methods: {
    emitNavItemClicked (item) {
      this.$emit(EVENTS.NAV_ITEM_CLICKED, item)
    },
    togglePhone () {
      this.$emit(EVENTS.TOGGLE_PHONE)
    },
    updateScroll () {
      let newTransparency = window.scrollY * 0.005

      this.navBarTransparency = (newTransparency > MAX_NAVBAR_TRANSPARENCY) ? MAX_NAVBAR_TRANSPARENCY : newTransparency
      this.navBarStyle.backgroundColor = 'rgba(255, 255, 255, ' + this.navBarTransparency + ')'
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
  width: calc(100% - 30px);
  position: fixed;
  display: block;
  padding: $padding-med;
  z-index: 10;
  height: $desktop-header-height;
  vertical-align: middle;
  border-bottom: 1px solid $grey;

  .logo {
    float: left;
  }

  .request-quote {
    float: right;

    button {
      span {
        font-size: $desktop-p-size-xs;
        text-transform: uppercase;
      }
    }
  }

  .navigation-items-container {
    float: right;
  }

  .phone {
    float: right;
  }
}
</style>
