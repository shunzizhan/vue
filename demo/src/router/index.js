import Vue from 'vue'
import Router from 'vue-router'
import {detailRoutes} from '@/components/detail.routes.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: detailRoutes
    },
    { path: '/', redirect: 'detail' }
  ]
})

export default router
