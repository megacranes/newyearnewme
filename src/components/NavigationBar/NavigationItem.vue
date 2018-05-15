<template lang="pug">
a.navigation-item(@click="emitItemClickedEvent")
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
@import 'src/style/colors';
@import 'src/style/variables';
@import 'src/style/fonts';

.navigation-item {
  overflow: hidden;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 5px 2px;

  span {
    color: $grey;
    padding: 10px;
    font-size: $desktop-p-size;
    vertical-align: middle;
  }
}
</style>
