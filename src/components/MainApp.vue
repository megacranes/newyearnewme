<template lang="pug">
.main-app
  navigation-bar(
    :navigation-items="navigationItems"
    @nav-item-clicked="changeCurrentComponent")
  component.current-component(
    :is="currentComponent"
    :class="{ navBarSpace: isNavBarSpacing }")

</template>

<script>
import NavigationBar from './NavigationBar/NavigationBar'
import {
  LANDING_PAGE,
  CONTACT,
  TEAM,
  FLEET,
  SERVICES } from '../constants/pages'
import LandingPage from './LandingPage/LandingPage'
import Contact from './Contact/Contact'
import Fleet from './Fleet/Fleet'
import Services from './Services/Services'
import Team from './Team/Team'

export default {
  name: 'MainApp',
  data () {
    return {
      currentComponent: LANDING_PAGE.component,
      navigationItems: [LANDING_PAGE, SERVICES, FLEET, TEAM, CONTACT]
    }
  },
  components: {
    NavigationBar,
    LandingPage,
    Contact,
    Fleet,
    Services,
    Team
  },
  computed: {
    isNavBarSpacing () {
      return (this.currentComponent !== LANDING_PAGE.component)
    }
  },
  methods: {
    transitionToLandingPage () {
      this.currentComponent = LANDING_PAGE.component
    },
    changeCurrentComponent (newComponent) {
      this.currentComponent = newComponent.component

      if (newComponent.onLoad) {
        this.$nextTick(newComponent.onLoad)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'src/style/fonts';
@import 'src/style/variables';

body {
  margin: 0;
}
.main-app {
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  user-select: none;

  .current-component {
    position: absolute;
    // TODO: Make this set if page !=== landing, and scroll > 5
    top: 0;
    width: 100%;
    overflow-x: hidden;

    &.navBarSpace {
      top: 60px;
    }
  }
}
</style>
