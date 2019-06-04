import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/index.vue';
import Layout from './components/layout/index.vue';
import About from './views/About.vue';
import Sellers from './views/sellers/index.vue';
import Dashboard from './views/dashboard/index.vue';

Vue.use(Router)

const router = new Router({
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
          path: 'dashboard',
          alias: '',
          component: Dashboard,
          name: 'dashboard',
          meta: {description: 'Overview of statistics'}
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
});

router.beforeEach();

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next({ 
//       path: '/login', 
//       query: { returnUrl: to.path } 
//     });
//   }

//   next();
// })

export default { router }