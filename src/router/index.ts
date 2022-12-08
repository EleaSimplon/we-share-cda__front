import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        name: 'home',
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        name: 'explore',
        path: 'explore',
        component: () => import('@/views/ExplorePage.vue')
      },
      {
        name: 'preparePage',
        path: 'prepare',
        component: () => import('@/views/PreparePage.vue')
      },
      {
        name: 'profile',
        path: 'profile',
        component: () => import('@/views/ProfilePage.vue')
      },
      {
        name: 'addActivity',
        path: 'add-activity',
        component: () => import('@/views/AddActivity.vue')
      },
      {
        name: 'activityPost',
        path: 'activity-post',
        props: true,
        component: () => import('@/views/ActivityPost.vue')
      },
      {
        name: 'loginPage',
        path: 'login-page',
        component: () => import('@/views/LoginPage.vue')
      },
      {
        name: 'registerPage',
        path: 'register-page',
        component: () => import('@/views/RegisterPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
