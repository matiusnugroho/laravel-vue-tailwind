import Dashboard from '@/layouts/Dashboard.vue'
import Auth from '@/layouts/Auth.vue'
const routes = [
  {
    path: '/',
    name: 'dj',
    component : Dashboard,
    children : [
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
    ]
  },
  {
    name :'auth',
    path: '/',
    component : Auth,
    children:[
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
    ]
  }
];

export default routes;
