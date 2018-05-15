import Vue from 'vue'
import Router from 'vue-router'
import MainApp from 'src/components/MainApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MainApp
    }
  ]
})
