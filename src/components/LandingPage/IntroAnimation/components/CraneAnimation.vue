<template lang="pug">
.crane-animation
  canvas(ref="craneAnimationCanvas")
</template>

<script>
export default {
  name: 'CraneAnimation',
  props: {
    startDrawing: false
  },
  data () {
    return {
      craneLineLength: 0,
      currentBallPercentage: 0,
      x: 0,
      y: 0,
      dx: 0,
      dy: 2
    }
  },
  watch: {
    startDrawing (newVal) {
      if (newVal) {
        this.drawCrane()
      }
    }
  },
  methods: {
    drawCrane () {
      // Colors
      // const LINE_COLOR = ''
      // const BALL_COLOR = ''
      // const HOOK_COLOR = ''

      this.drawLine()
        .then(() => {
          this.drawBall(this.currentBallPercentage)
        })
    },
    drawLine () {
      let canvas = this.$refs.craneAnimationCanvas

      const LINE_MAX_LENGTH = canvas.height * 0.7

      return new Promise((resolve) => {
        if (this.craneLineLength < LINE_MAX_LENGTH) {
          if (canvas) {
            let ctx = canvas.getContext('2d')
            this.x = canvas.width / 2

            ctx.lineWidth = 1

            window.requestAnimationFrame(this.drawCrane)

            ctx.beginPath()
            ctx.moveTo(this.x, this.craneLineLength)
            ctx.lineTo(this.x, this.craneLineLength + this.dy)
            ctx.closePath()
            ctx.stroke()

            this.craneLineLength++
          }
        } else {
          resolve(canvas)
        }
      })
    },
    drawBall (currentBallPercentage) {
      let canvas = this.$refs.craneAnimationCanvas

      const RADIUS = 20
      const START_ANGLE = Math.PI / 2
      const END_ANGLE = Math.PI * 2
      const ANTI_CLOCKWISE = false

      this.y = this.craneLineLength + RADIUS

      return new Promise((resolve) => {
        if (canvas) {
          let ctx = canvas.getContext('2d')

          ctx.lineWidth = 1

          window.requestAnimationFrame(() => { this.drawBall(this.currentBallPercentage / 100) })

          ctx.beginPath()
          ctx.arc(this.x, this.y, RADIUS, -(START_ANGLE), (END_ANGLE * currentBallPercentage - START_ANGLE), ANTI_CLOCKWISE)
          ctx.stroke()
          this.currentBallPercentage++
        }
      })
    },
    drawHook () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.crane-animation {
   text-align:center;

   canvas {
      display: inline;
      height: 40vh;
      width: 40vw;
   }
}

</style>
