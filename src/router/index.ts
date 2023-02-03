import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:catchAll(.*)',
            component: () => import('@/views/ErrorView.vue')
        },
        {
            path: '/',
            component: () => import('@/views/HomeView.vue')
        }
    ]
})

export default router