<template lang="pug">
.landing-page-slider
  carousel
    slide(v-for="slide in slides"
          autoplay="true"
          autoplayTimeout="3000"
          perPage="1"
          paginationActiveColor="#42b983"
          paginationColor="#b2ebd1"
          paginationSize="1"
          easing="linear"
          speed="10"
          navigationEnabled="true"
        )
      img(class="label" :src="slide.src")
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

/**
 TODO:
 */

export default {
  name: 'LandingPageSlider',
  props: ['slides'],
  data () {
    return {
      carouselOptions: {

      }
    }
  },
  components: {
    Carousel,
    Slide
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.landing-page-slider {
  height: 100vh;
  width: calc(100vw - 10px);

  .VueCarousel {
    .VueCarousel-wrapper {
      .VueCarousel-inner {
        .VueCarousel-slide {
          height: 100%;
          position: relative;
          text-align: center;
          min-height: 100vh;

          flex-basis: inherit;
          flex-grow: 0;
          flex-shrink: 0;
          user-select: none;
        }

        .label {
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .VueCarousel-pagination {
      .VueCarousel-dot-container {
        margin: auto;
        position: absolute;
        bottom: 20px;
        .VueCarousel-dot {
          &.VueCarousel-dot--active {
            .VueCarousel-dot-inner {
              background: rgba(0, 0, 0, 0.47) !important;
            }
          }

        }

      }
    }
  }

}
</style>
