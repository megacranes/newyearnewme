<template lang="pug">
.main-app
  navigation-bar
  component(v-bind:is="currentComponent")
</template>

<script>
import NavigationBar from './NavigationBar/NavigationBar'
import IntroAnimation from './LandingPage/IntroAnimation/IntroAnimation'

const COMPONENTS = {
  ANIMATION: 'intro-animation',
  LANDING_PAGE: 'landing-page'
}

export default {
  name: 'MainApp',
  data () {
    return {
      currentComponent: COMPONENTS.LANDING_PAGE
    }
  },
  components: {
    NavigationBar,
    IntroAnimation
  },
  methods: {
    transitionToLandingPage () {
      this.currentComponent = COMPONENTS.LANDING_PAGE
      alert('hi')
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
