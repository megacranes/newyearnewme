<template lang="pug">
.landing-page
  .slider-1-container
    landing-page-slider(:slides="slides")
    button.action-item-btn(@click="getACrane")
      span Get a Crane
  .word-cloud-container
    business-word-cloud
  .about-the-company-container
    .text
      h4 {{ aboutUsTitle }}
      h2 {{ aboutUsTitleHighlight }}
      p {{ aboutUs }}
  .img-container
  .what-we-do-container
  .contact-container
</template>

<script>
import LandingPageSlider from './LandingPageSlider/LandingPageSlider'
import BusinessWordCloud from './BusinessWordCloud/BusinessWordCloud'
import { SLIDE_1, SLIDE_2, SLIDE_3, SLIDE_4 } from '../../constants/landing-page/landing-page'

export default {
  name: 'LandingPage',
  props: [],
  data () {
    return {
      slides: [SLIDE_1, SLIDE_2, SLIDE_3, SLIDE_4],
      aboutUsTitle: 'With over 30 years experience with',
      aboutUsTitleHighlight: 'Cranes',
      aboutUs: 'Lorem ipsum dolor sit amet, sodales sollicitudin tortor lacus nostrud rutrum, eget adipiscing hendrerit integer pellentesque faucibus, at mauris ipsum, blandit lectus tortor nascetur massa fringilla ornare, dictum tempus risus et. Tincidunt volutpat, commodo adipiscing eu a est, non venenatis mi fusce ante ut, eu aliquet. Ligula non lorem non, lacus pede amet elit, at at lobortis, lacinia ullamcorper interdum pede per. Maecenas orci adipiscing et orci ac sociosqu. Nec a lacus id dolor, mattis donec, vestibulum nihil urna ligula sed ultricies malesuada, risus vitae nunc quam, suspendisse molestie ut. Nec feugiat ut etiam nec, vel elit vel vestibulum, ipsum at sed leo malesuada quis.'
    }
  },
  components: {
    LandingPageSlider,
    BusinessWordCloud
  },
  methods: {
    getACrane () {
      // TODO: emmit event to mainApp to switch component to getACrane
    }
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
      top: 50vh;
      left: 0;
      right: 0;
      height: 50px;
      width: 200px;
      font-size: 22px;

      span {
        margin: 15px;
      }
    }
  }

  .word-cloud-container {
    padding: 100px;
  }

  .about-the-company-container {
    height: 100vh;
    width: 100vw;
    background-color: #0f0f39;
    color: #FFFFFF;

    .text {
      text-align: center;
      padding: 30px 100px;

      h4 {
        margin: 20px;
        margin-top: 100px;
      }

      h2 {
        margin: 0;
        font-size: 80px;
      }

      p {
        text-align: left;
        font-size: 24px;
        line-height: 40px;
      }
    }
  }
}
</style>
