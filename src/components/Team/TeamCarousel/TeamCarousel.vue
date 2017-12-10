<template lang="pug">
.team-carousel
  slick(ref="slick" :options="slickOptions")
    a(v-for="member in teamMembers" href="https://i.pinimg.com/564x/6c/78/05/6c7805c892e74c3ff5c9596f22fdb1b6.jpg")
      img(src="https://i.pinimg.com/564x/6c/78/05/6c7805c892e74c3ff5c9596f22fdb1b6.jpg")
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'TeamCarousel',
  props: ['teamMembers'],
  data () {
    return {
      slickOptions: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        accessibility: true,
        adaptiveHeight: false,
        arrows: true,
        dots: true,
        draggable: true,
        edgeFriction: 0.30,
        swipe: true
      }
    }
  },
  components: {
    Slick
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.team-carousel {
  overflow: hidden;

  .slick {
    a {
      img {
        height: 170px;
      }
    }
  }
}
</style>
