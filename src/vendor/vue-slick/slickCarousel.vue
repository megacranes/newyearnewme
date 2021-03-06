<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import $ from 'jquery'

export default {

  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    height: {
      type: String,
      default () {
        return '170px'
      }
    },
    imgSelector: {
      type: String,
      default () {
        return 'slick-img'
      }
    }
  },

  mounted () {
    this.create()
  },

  destroyed () {
    $(this.$el).slick('unslick')
  },

  watch: {
    height (newHeight) {
      this.setHeight(newHeight)
    }
  },

  methods: {
    create () {
      const $slick = $(this.$el)

      $slick.on('afterChange', this.onAfterChange)
      $slick.on('beforeChange', this.onBeforeChange)
      $slick.on('breakpoint', this.onBreakpoint)
      $slick.on('destroy', this.onDestroy)
      $slick.on('edge', this.onEdge)
      $slick.on('init', this.onInit)
      $slick.on('reInit', this.onReInit)
      $slick.on('setPosition', this.onSetPosition)
      $slick.on('swipe', this.onSwipe)
      $slick.on('lazyLoaded', this.onLazyLoaded)
      $slick.on('lazyLoadError', this.onLazyLoadError)

      $slick.slick(this.options)
      this.setHeight(this.height)
    },

    destroy () {
      const $slick = $(this.$el)

      $slick.off('afterChange', this.onAfterChange)
      $slick.off('beforeChange', this.onBeforeChange)
      $slick.off('breakpoint', this.onBreakpoint)
      $slick.off('destroy', this.onDestroy)
      $slick.off('edge', this.onEdge)
      $slick.off('init', this.onInit)
      $slick.off('reInit', this.onReInit)
      $slick.off('setPosition', this.onSetPosition)
      $slick.off('swipe', this.onSwipe)
      $slick.off('lazyLoaded', this.onLazyLoaded)
      $slick.off('lazyLoadError', this.onLazyLoadError)
      $(this.$el).slick('unslick')
    },

    reSlick () {
      this.destroy()
      this.create()
    },

    next () {
      $(this.$el).slick('slickNext')
    },

    prev () {
      $(this.$el).slick('slickPrev')
    },

    pause () {
      $(this.$el).slick('slickPause')
    },

    play () {
      $(this.$el).slick('slickPlay')
    },

    goTo (index, dontAnimate) {
      $(this.$el).slick('slickGoTo', index, dontAnimate)
    },

    currentSlide () {
      return $(this.$el).slick('slickCurrentSlide')
    },

    add (element, index, addBefore) {
      $(this.$el).slick('slickAdd', element, index, addBefore)
    },

    remove (index, removeBefore) {
      $(this.$el).slick('slickRemove', index, removeBefore)
    },

    filter (filterData) {
      $(this.$el).slick('slickFilter', filterData)
    },

    unfilter () {
      $(this.$el).slick('slickUnfilter')
    },

    getOption (option) {
      $(this.$el).slick('slickGetOption', option)
    },

    setOption (option, value, refresh) {
      $(this.$el).slick('slickSetOption', option, value, refresh)
    },

    setPosition () {
      $(this.$el).slick('setPosition')
    },

    setHeight (newHeight) {
      const CLASS = 'slick-img'
      const images = Array.from(document.getElementsByClassName(CLASS))

      images.forEach(function (img) {
        img.style.height = newHeight
      })
    },

    // Events
    onAfterChange (event, slick, currentSlide) {
      this.$emit('afterChange', event, slick, currentSlide)
    },

    onBeforeChange (event, slick, currentSlide, nextSlide) {
      this.$emit('beforeChange', event, slick, currentSlide, nextSlide)
    },

    onBreakpoint (event, slick, breakpoint) {
      this.$emit('breakpoint', event, slick, breakpoint)
    },

    onDestroy (event, slick) {
      this.$emit('destroy', event, slick)
    },

    onEdge (event, slick, direction) {
      this.$emit('edge', event, slick, direction)
    },

    onInit (event, slick) {
      this.$emit('init', event, slick)
    },

    onReInit (event, slick) {
      this.$emit('reInit', event, slick)
    },

    onSetPosition (event, slick) {
      this.$emit('setPosition', event, slick)
    },

    onSwipe (event, slick, direction) {
      this.$emit('swipe', event, slick, direction)
    },

    onLazyLoaded (event, slick, image, imageSource) {
      this.$emit('lazyLoaded', event, slick, image, imageSource)
    },

    onLazyLoadError (event, slick, image, imageSource) {
      this.$emit('lazyLoadError', event, slick, image, imageSource)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.slick-slider {
  overflow: hidden;

  a {
    width: auto;
    img {
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }
  }
}
</style>
