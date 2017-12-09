<template lang="pug">
.navigation-item(@click="emitItemClickedEvent")
  span {{ itemName }}
</template>

<script>

export default {
  name: 'NavigationItem',
  props: ['name'],
  data () {
    return {
      itemName: this.name
    }
  },
  components: {

  },
  methods: {
    emitItemClickedEvent () {
      this.$emit('item-clicked', this.itemName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigation-item {
  overflow: hidden;
  display: inline-block;
  position: relative;

  span {
    padding: 10px;
    font-size: 18px;
    vertical-align: middle;
  }
}
</style>
