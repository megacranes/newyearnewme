<template lang="pug">
.navigation-item(@click="emitItemClickedEvent")
  span {{ item.navigationName }}
</template>

<script>

export default {
  name: 'NavigationItem',
  props: ['item', 'hasSubMenu'],
  components: {

  },
  methods: {
    emitItemClickedEvent () {
      this.$emit('nav-item-clicked', this.item)
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
  cursor: pointer;

  span {
    padding: 10px;
    font-size: 18px;
    vertical-align: middle;
  }
}
</style>
