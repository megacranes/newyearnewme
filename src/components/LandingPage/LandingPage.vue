<template lang="pug">
.landing-page
  landing-page-slider(:slides="slides")
</template>

<script>
import LandingPageSlider from './LandingPageSlider/LandingPageSlider'
import { SLIDE_1, SLIDE_2, SLIDE_3, SLIDE_4 } from '../../constants/landing-page/landing-page'

export default {
  name: 'LandingPage',
  props: [],
  data () {
    return {
      slides: [SLIDE_1, SLIDE_2, SLIDE_3, SLIDE_4]
    }
  },
  components: {
    LandingPageSlider
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.landing-page {
  overflow: hidden;
}
</style>
