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
        name: 'search',
        path: 'search',
        component: () => import('@/views/SearchPage.vue')
      },
      {
        name: 'tab3',
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
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
        component: () => import('@/views/ActivityPost.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
