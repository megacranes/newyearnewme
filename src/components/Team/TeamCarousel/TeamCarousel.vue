<template lang="pug">
.team-carousel
  slick(ref="slick" :options="slickOptions")
    a(v-for="member in teamMembers" :key="member.key" @click="showTeamMemberInfo(member)")
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
        centerMode: false,
        centerPadding: '20px',
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 3,
        infinite: true,
        accessibility: true,
        adaptiveHeight: true,
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
}
</style>
