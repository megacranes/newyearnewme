<template lang="pug">
.intro-animation
  crane-animation(:start-drawing="showCraneAnimation",
                  v-on:crane-animation-complete=handleAnimationComplete)
  .intro-msg
    span {{ introMsgVisible }}
</template>

<script>
import CraneAnimation from './components/CraneAnimation'

export default {
  name: 'IntroAnimation',
  data () {
    return {
      introMsg: 'Deliver on your commitments.',
      introMsgVisible: '',
      introMsgIndex: 0,
      typeWriterInterval: null,
      showCraneAnimation: false
    }
  },
  components: {
    CraneAnimation
  },
  mounted () {
    const TYPERWRITER_INTERVAL = 40

    this.typeWriterInterval = setInterval(this.typeIntroMessage, TYPERWRITER_INTERVAL)
  },
  methods: {
    typeIntroMessage () {
      if (this.introMsgIndex < this.introMsg.length) {
        this.introMsgVisible += this.introMsg[this.introMsgIndex++]
      } else {
        clearInterval(this.typeWriterInterval)
        this.showCraneAnimation = true
      }
    },
    handleAnimationComplete () {
      this.$emit('animation-complete')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.intro-animation {
  .intro-msg {
    text-align: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    span {
	    font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
      font-size: 32px;
      color: rgba(112, 112, 112, 0.53);
    }
  }
}
</style>
