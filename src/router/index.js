import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NotFoundView from '@/components/standard/404'
import Dashboard from '@/components/Dashboard'
import Statistics from '@/components/views/Statistics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'statistics',
          alias: '',
          component: Statistics,
          name: 'Statistics',
          meta: {
            description: 'Overview of environment'
          }
        }
      ]
    },
    {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
})
