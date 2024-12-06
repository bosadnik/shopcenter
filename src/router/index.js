import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Porfolio from '../views/Portfolio.vue'
import PortfolioBranch from '../views/PortfolioBranch.vue'
import PortfolioBranchPage from '../views/PortfolioBranchPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Porfolio
    },
    {
      path: '/portfolio/:branch',
      name: 'PortfolioBranch',
      component: PortfolioBranch
    },
  
    {
      path: '/portfolio/:branch/:page',
      name: 'PortfolioBranchPage',
      component: PortfolioBranchPage
    },
    
    ,{ path: '/onas', name: 'Onas', component: () => import(/* webpackChunkName: "about" */ '../views/Onas.vue')}
    // ,{ path: '/dlaarchitektow', name: 'Dlaarchitektow', component: () => import(/* webpackChunkName: "about" */ '../views/Dlaarchitektow.vue')}
    ,{ path: '/kontakt', name: 'Kontant', component: () => import(/* webpackChunkName: "about" */ '../views/Kontakt.vue')}
  
    ,{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
