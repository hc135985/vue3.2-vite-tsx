import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: import('../views/Home'),
  },
  {
    path: '/login',
    name: 'About',
    component: () => import('../views/Login'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
