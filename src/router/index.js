import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('../views/Main.vue')
        },
        {
            name: 'Error',
            path: '/:catchAll(.*)',
            component: () => import('../views/Error.vue')
        }
    ]
})

export default router