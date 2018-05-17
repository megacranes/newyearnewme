<template lang="pug">
.team-carousel
  slick(ref="slick" :options="slickOptions")
    a(v-for="member in teamMembers" :key="member.key" @click="showTeamMemberInfo(member)")
      img(class="slick-img" :src="member.pic").slick-img
</template>

<script>
import Slick from '../../../vendor/vue-slick/slickCarousel'

export default {
  name: 'TeamCarousel',
  props: ['teamMembers'],
  data () {
    return {
      slickOptions: {
        accessibility: true, // Enable tabbing/arrow keys
        adaptiveHeight: true,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        cssEase: 'ease-out',
        edgeFriction: 0.15,
        dots: false,
        draggable: true,
        focusOnSelect: true,
        pauseOnFocus: false,
        slidesToShow: 3,
        swipeToSlide: true,
        swipe: true
      }
    }
  },
  components: {
    Slick
  },
  methods: {
    showTeamMemberInfo (teamMember) {
      this.$emit('show-team-member-info', teamMember)
    },
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.team-carousel {
  overflow: hidden;

  > .slick-img {

  }
}
</style>
