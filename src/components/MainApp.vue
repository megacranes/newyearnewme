<template lang="pug">
.main-app
  component(v-bind:is="currentComponent")
  intro-animation(v-on:animation-complete=transitionToLandingPage)
</template>

<script>
import IntroAnimation from './LandingPage/IntroAnimation/IntroAnimation'

const COMPONENTS = {
  ANIMATION: 'intro-animation',
  LANDING_PAGE: 'landing-page'
}

export default {
  name: 'MainApp',
  data () {
    return {
      currentComponent: COMPONENTS.ANIMATION
    }
  },
  components: {
    IntroAnimation
  },
  method: {
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
}
</style>
