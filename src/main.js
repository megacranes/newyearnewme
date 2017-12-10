// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('../node_modules/slick-carousel/slick/slick.min.js')
require('../node_modules/slick-carousel/slick/slick-theme.css')
require('../node_modules/slick-carousel/slick/slick-theme.scss')
require('../node_modules/slick-carousel/slick/slick.css')
require('../node_modules/slick-carousel/slick/slick.scss')
require('../node_modules/slick-carousel/slick/slick.min.js')
require('../node_modules/slick-carousel/slick/slick.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
