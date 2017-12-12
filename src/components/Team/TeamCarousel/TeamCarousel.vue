<template lang="pug">
.team-carousel
  slick(ref="slick" :options="slickOptions")
    a(v-for="member in teamMembers" @click="showTeamMemberInfo(member)")
      img(class="slick-img" :src="member.pic")
</template>

<script>
import Slick from '../../../vendor/vue-slick/slickCarousel'

export default {
  name: 'TeamCarousel',
  props: ['teamMembers'],
  data () {
    return {
      slickOptions: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
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
