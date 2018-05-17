<template lang="pug">
.service-item
  .title
    span {{ title }}
  img(:src='imgSrc')
  .description
    span {{ description }}
</template>

<script>
export default {
  name: 'ServiceItem',
  props: [
    'imgSrc',
    'title',
    'description'
  ],
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'src/style/colors';
@import 'src/style/variables';
@import 'src/style/fonts';
@import 'src/style/icons';
@import 'src/style/buttons';

.service-item {
  display: inline-block;
  max-width: 180px;
  height: 430px;
  border: 2px solid $mega-orange;
  border-radius: 6px;
  margin: 15px;
  padding: 15px;
  vertical-align: top;

  img {
    display: block;
    margin: 15px auto;
    height: 150px;
  }

  .title {
    width: 100%;
    height: 90px;
    display: table;

    span {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      font-size: 16px;
      line-height: 26px;
    }
  }

  .description {
    width: 100%;
    height: 175px;
    display: table;

    span {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      font-size: 11px;
      line-height: 20px;
    }
  }
}

</style>
