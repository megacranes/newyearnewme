<template lang="pug">
.main-app
  intro-animation
</template>

<script>
import IntroAnimation from './LandingPage/IntroAnimation/IntroAnimation'

export default {
  name: 'MainApp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    IntroAnimation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
