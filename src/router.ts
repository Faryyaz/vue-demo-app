import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/index.vue';
import Layout from './components/Layout/index.vue';
import About from './views/About.vue';
import Sellers from './views/Sellers/index.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: 'sellers',
          alias: '',
          component: Sellers,
          name: 'sellers',
          meta: {description: 'Overview of the best sellers'}
        },
        {
          path: 'about',
          alias: '',
          component: About,
          name: 'about',
          meta: {description: 'Overview of environment'}
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
