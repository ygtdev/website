<script>
    import { store } from '@/store/index.js'

    export default {
        data() {
            return {
                store
            };
        },
    }
</script>

<template>
    <footer class="bg-gray-200 rounded-sm py-3 px-6 text-sm font-medium flex items-center justify-between">
        <div>Developed by COOL, used <a href="https://vuejs.org/" target="_blank" class="hover:underline">Vue.js</a> & <a href="https://tailwindcss.com/" target="_blank" class="hover:underline">TailwindCSS</a></div>
        <div class="flex gap-2 text-black/80">
            <a v-for="element in store.personal.links" :key="element" :href="element.link" target="_blank" class="transition easy-in hover:text-black">
                <i :class="element.icon"></i>
            </a>
        </div>
    </footer>
</template>