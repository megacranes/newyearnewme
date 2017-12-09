<template lang="pug">
.crane-animation
  canvas(ref="craneAnimationCanvas", width="600px", height="300px")
</template>

<script>
const LINE_COLOR = '#000000'
const BALL_COLOR = '#F4B042'
// const HOOK_COLOR = '#000000'

const RADIUS = 20

export default {
  name: 'CraneAnimation',
  props: {
    startDrawing: false
  },
  data () {
    return {
      craneLineLength: 0,
      currentBallPercentage: 0,
      x: 0.5,
      y: 0.5,
      dy: 5
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
      this.drawLine()
        .then(() => {
          this.drawBall(this.currentBallPercentage)
          .then(() => {
            this.drawHook()
            .then(() => {
              this.handleAnimationComplete()
            })
          })
        })
    },
    drawLine () {
      let canvas = this.$refs.craneAnimationCanvas

      const LINE_MAX_LENGTH = canvas.height * 0.7

      return new Promise((resolve) => {
        if (this.craneLineLength < LINE_MAX_LENGTH) {
          if (canvas) {
            let ctx = canvas.getContext('2d')
            this.x = canvas.width / 2 + 0.5

            ctx.lineWidth = 1

            window.requestAnimationFrame(this.drawCrane)

            ctx.beginPath()
            ctx.strokeStyle = LINE_COLOR
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

      const START_ANGLE = Math.PI / 2
      const END_ANGLE = Math.PI * 2
      const MAX_PERCENTAGE = 104

      this.y = this.craneLineLength + RADIUS + 2 + 0.5 // offset linewidth

      return new Promise((resolve) => {
        if (currentBallPercentage <= MAX_PERCENTAGE) {
          if (canvas) {
            let ctx = canvas.getContext('2d')

            ctx.lineWidth = 0.5

            window.requestAnimationFrame(() => { this.drawBall(this.currentBallPercentage / 100) })

            ctx.beginPath()
            ctx.strokeStyle = BALL_COLOR
            ctx.arc(this.x, this.y, RADIUS, -(START_ANGLE), (END_ANGLE * currentBallPercentage - START_ANGLE))
            ctx.stroke()

            this.currentBallPercentage++
          }
        } else {
          resolve()
        }
      })
    },
    drawHook () {
      this.y += RADIUS

      return new Promise((resolve) => {
        resolve()
      })
    },
    handleAnimationComplete () {
      this.$emit('crane-animation-complete')
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
   }
}
</style>
