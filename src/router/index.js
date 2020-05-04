import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('@/views/home'),

    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about'),
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('@/views/experience'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@/views/skills'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('@/views/work'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact'),
    },
  ],
})


export default router