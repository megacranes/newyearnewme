<template lang="pug">
.team
  .vip.team-members-container
    h2 Department Heads
    team-carousel(:team-members="salesTeam")
  .sales.team-members-container
    h2 Sales
  .operators.team-members-container
    h2 Operators
  .mechanics.team-members-container
    h2 Shop Team
</template>

<script>
import { KERRY_HAWLEY, BARB, MIKE_PROPERZI, VLAD } from '../../constants/sales-team'
import TeamCarousel from './TeamCarousel/TeamCarousel'

export default {
  name: 'Team',
  props: [],
  data () {
    return {
      salesTeam: [KERRY_HAWLEY, BARB, MIKE_PROPERZI, VLAD]
    }
  },
  components: {
    TeamCarousel
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.team {
  overflow: hidden;

  .team-members-container {
    width: 100%;

    h2 {
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>
