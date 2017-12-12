<template lang="pug">
.landing-page
  .slider-1-container
    landing-page-slider(:slides="slides")
    button.action-item-btn
      span Get a Crane
  .word-cloud-container
  .about-the-company-container
  .img-container
  .what-we-do-container
  .contact-container
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

  .slider-1-container {
    .action-item-btn {
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      height: 50px;
      width: 200px;
      font-size: 22px;

      span {
        margin: 15px;
      }
    }
  }
}
</style>
