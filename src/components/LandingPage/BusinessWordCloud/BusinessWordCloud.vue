<template lang="pug">
.business-word-cloud
  vue-word-cloud(
    :words="words"
    :color="color"
    :font-family="fontFamily"
    :max-font-size="maxFontSize"
    :font-size-ratio="fontSizeRatio"
    :rotation="rotation"
  )
</template>

<script>
import VueWordCloud from 'vuewordcloud'

const WORDS = [
  ['Tower Crane', 8],
  ['Self Erecting', 6],
  ['Luffing Crane', 6],
  ['Mini Crane', 5],
  ['Crane', 8],
  ['Crawler', 2],
  ['Boom Truck', 5],
  ['Truck Trailer', 7],
  ['All Terrain', 3],
  ['Flat Top', 8],
  ['Rough Terrain', 4],
  ['City Crane', 9],
  ['Knuckle Boom', 7],
  ['Conventional', 3],
  ['Hydraulic', 1],
  ['Mega', 15]
]

export default {
  name: 'BusinessWordCloud',
  props: [],
  data () {
    return {
      words: WORDS,
      fontFamily: '"Trebuchet MS"',
      fontSizeRatio: 10,
      rotation: '0',
      color: "([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
    }
  },
  components: {
    [VueWordCloud.name]: VueWordCloud
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.business-word-cloud {
  height: calc(100vh - 100px);
  width: calc(100vw - 100px);
}
</style>
