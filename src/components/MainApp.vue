<template lang="pug">
.main-app
  navigation-bar(:navigation-items="navigationItems" @nav-item-clicked="changeCurrentComponent")
  component(v-bind:is="currentComponent")
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
  methods: {
    transitionToLandingPage () {
      this.currentComponent = LANDING_PAGE.component
    },
    changeCurrentComponent (newComponent) {
      this.currentComponent = newComponent.component
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-app {
  overflow: hidden;
  font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
  font-size: 32px;
}
</style>
