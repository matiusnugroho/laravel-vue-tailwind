const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('@/views/MessagesView.vue')
    }
]

export default routes