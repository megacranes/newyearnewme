<template lang="pug">
.landing-page
  .main-img-container.landing-page-container
    span.main-img-text Deliver on your commitments.
    button.action-item-btn.button(@click="getACrane")
      span Get a Crane
    button.secondary-action-item-btn.button(@click="getACrane")
      span View our Projects
  .what-we-do-container.landing-page-container
    h4 What we Do
    .service-item-container
      service-item(
        v-for='item in servicesList'
        :key='item.id'
        :imgSrc='item.src'
        :title='item.title'
        :description='item.description')
  .about-the-company-container.landing-page-container
    .text
      .about-us {{ aboutUsTitle }}
      .about-us-highlight {{ aboutUsTitleHighlight }}
      p {{ aboutUs }}
  .img-container-1.landing-page-container
  .our-projects.landing-page-container
    h4 Our Projects
  .img-container-2.landing-page-container
  #contact-container.landing-page-container
    contact

</template>

<script>
import ServiceItem from './WhatWeDo/ServiceItem'
import Contact from '../Contact/Contact'

import Services from './WhatWeDo/services'

export default {
  name: 'LandingPage',
  props: [],
  data () {
    return {
      aboutUsTitle: 'With over 30 years experience with',
      aboutUsTitleHighlight: 'Cranes',
      aboutUs: 'Lorem ipsum dolor sit amet, sodales sollicitudin tortor lacus nostrud rutrum, eget adipiscing hendrerit integer pellentesque faucibus, at mauris ipsum, blandit lectus tortor nascetur massa fringilla ornare, dictum tempus risus et. Tincidunt volutpat, commodo adipiscing eu a est, non venenatis mi fusce ante ut, eu aliquet. Ligula non lorem non, lacus pede amet elit, at at lobortis, lacinia ullamcorper interdum pede per. Maecenas orci adipiscing et orci ac sociosqu. Nec a lacus id dolor, mattis donec, vestibulum nihil urna ligula sed ultricies malesuada, risus vitae nunc quam, suspendisse molestie ut. Nec feugiat ut etiam nec, vel elit vel vestibulum, ipsum at sed leo malesuada quis.',
      servicesList: [Services.LIFTS, Services.SUPPORT, Services.TRANSPORT, Services.STAFF]
    }
  },
  components: {
    ServiceItem,
    Contact
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
@import 'src/style/colors';
@import 'src/style/variables';
@import 'src/style/fonts';
@import 'src/style/buttons';

.landing-page {
  overflow: hidden;

  .landing-page-container {
    height: $desktop-landing-page-height;
  }

  .main-img-container {
    background: no-repeat center url('../../assets/main-img.jpg');
    text-align: center;

    .main-img-text {
      margin: 0 auto;
      padding: 110px;
      color: $grey;
      font-size: $desktop-h1-size;
      position: relative;
      display: block;
    }
  }

  .about-the-company-container {
    height: 100vh;
    width: 100vw;
    background-color: $grey;
    color: #FFFFFF;

    .text {
      text-align: center;
      padding: 30px 100px;

      .about-us {
        margin: 20px;
        font-size: $desktop-h3-size;
        margin-top: 80px;
      }

      .about-us-highlight {
        margin: 0;
        font-size: 80px;
      }

      p {
        text-align: left;
        font-size: $desktop-p-size;
        line-height: 32px;
      }
    }
  }

  .img-container-1 {
    height: 100vh;
    width: 100vw;
    background: no-repeat center/80% url('https://si.wsj.net/public/resources/images/MN-AO416A_CRANE_J_20170321145815.jpg');
    background-size: cover;
  }

  .what-we-do-container {
    background-color: $white;
    color: $grey;
    font-size: $desktop-h1-size;
    h4 {
      margin: 15px;
    }

    .service-item-container {
      display: block;
      text-align: center;
    }
  }

  .img-container-2 {
    height: 100vh;
    width: 100vw;
    background: no-repeat center/80% url('https://s-media-cache-ak0.pinimg.com/originals/95/ed/06/95ed06ee5dedb51f7650f661003ae1a2.jpg');
    background-size: cover;
  }

  .our-projects {
    color: $grey;
    font-size: $desktop-h1-size;

    h4 {
      margin: 15px;
    }
  }

  #contact-container {
    background-color: $grey;
  }
}
</style>
