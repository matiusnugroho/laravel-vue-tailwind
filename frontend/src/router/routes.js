const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { layout: 'Dashboard' } // DashboardLayout for non-login/register routes
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { layout: 'Dashboard' }
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('@/views/MessagesView.vue'),
    meta: { layout: 'Dashboard' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { layout: 'Auth' }
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue'),
    name: 'register',
    meta: { layout: 'Auth' }
  }
];

export default routes;
