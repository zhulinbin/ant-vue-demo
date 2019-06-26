import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from './route.config.json'
import { storage } from '../assets/js/utils/storage'

var registerRoute = routeConfig => {
  const route = []
  routeConfig.map(views => {
    route.push({
      path: views.path,
      name: views.name !== undefined ? views.name : null,
      redirect: views.redirect !== undefined ? views.redirect : null,
      component: () =>
        import(/* webpackChunkName: "[request]" */ `@/views${views.component}`),
      meta: views.meta !== undefined ? views.meta : null,
      children:
        views.children !== undefined ? registerRoute(views.children) : null
    })
  })

  return route
}

var route = registerRoute(routeConfig)
Vue.use(Router)

const routeInstance = new Router({
  routes: route
})

routeInstance.beforeEach((to, from, next) => {
  const token = storage.cookie.get('token')
  if (to.name !== 'login' && token === null) {
    routeInstance.push({ name: 'login' })
  } else {
    next()
  }
})

export default routeInstance
