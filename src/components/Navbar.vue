<script>
    export default {
        methods: {
            getClass(path) {
                return this.$route.name == path ? true : false
            }
        }
    }
</script>

<template>
    <nav class="bg-gray-200 rounded-sm py-2 px-5 text-sm font-medium flex items-center justify-between shadow-sm">
        <div class="flex gap-2">
            <router-link :to="{
                path: '/'
            }" :class="{
                'bg-gray-300': getClass('Home')
            }" class="hover:bg-gray-300 transition ease-in py-1 px-2 rounded-sm">Home</router-link>
        </div>
        <button class="hover:bg-gray-300 transition ease-in py-1 px-2 rounded-sm">
            <i class="fa-solid fa-sun-bright"></i>
        </button>
    </nav>
</template>