<template lang="pug">
.team
  .team-member-info
    .team-member-picture
      img(:src="currentMember.pic")
    .team-member-name
      span {{ currentMember.name }}
    .team-member-job-title
      span {{ currentMember.jobTitle }}
    .team-member-cel-num
      span {{ currentMember.celPhone }}
    .team-member-email
      span {{ currentMember.email }}
    .team-member-description
      span {{ currentMember.detailedDescription }}
  .vip.team-members-container
    h2 Department Heads
    team-carousel(:team-members="salesTeam" @show-team-member-info="showTeamMemberInfo")
</template>

<script>
import { KERRY_HAWLEY, BARB, MIKE_PROPERZI, VLAD } from '../../constants/team-members'
import TeamCarousel from './TeamCarousel/TeamCarousel'

export default {
  name: 'Team',
  props: [],
  data () {
    return {
      salesTeam: [KERRY_HAWLEY, BARB, MIKE_PROPERZI, VLAD],
      currentMember: KERRY_HAWLEY
    }
  },
  components: {
    TeamCarousel
  },
  methods: {
    showTeamMemberInfo (member) {
      this.currentMember = member
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.team {
  overflow: hidden;

  .team-member-info {
    text-align: center;

    img {
      height: 240px;
    }

    span {
      font-size: 16px;
    }
  }

  .team-members-container {
    width: 100%;

    h2 {
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>
