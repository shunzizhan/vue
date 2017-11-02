import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import {HelloWorldRoutes} from '@/components/HelloWorld.routes'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: HelloWorld
//     }
//   ]
// })

Vue.use(Router)

// export default new Router({
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorldRoutes
    }
  ]
})

export default router
