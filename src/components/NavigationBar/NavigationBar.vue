<template lang="pug">
.navigation-bar
  navigation-item(v-for="item in navItems" :name="item")
</template>

<script>
import NavigationItem from './NavigationItem'

export default {
  name: 'NavigationBar',
  data () {
    return {
      navItems: [
        'Item-1',
        'Item-2',
        'Item-3',
        'Item-4',
        'Item-5'
      ]
    }
  },
  components: {
    NavigationItem
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigation-bar {
  overflow: hidden;
  width: 100%;
}
</style>