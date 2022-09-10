<template>
    <div class="h-full w-full flex flex-col gap-20 py-4 px-[5%] sm:px-[20%] lg:px-[30%] bg-primary-500 text-tertiary-500">
        <nav class="bg-secondary-500 py-2 px-5 flex items-center justify-between rounded-xl">
            <h1 class="font-semibold">ygtdev.com</h1>
        </nav>
        <RouterView />
        <footer class="bg-secondary-500 py-2 px-5 flex items-center justify-between text-sm rounded-xl">
            <h1 class="font-semibold">Created by COOL, using <x-link color="primary" href="https://vuejs.org/" target="_blank">Vue.js</x-link>.</h1>
            <div class="flex gap-2">
                <a href="https://github.com/ygtdev" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://discord.gg/CCExrpU" target="_blank">
                    <i class="fa-brands fa-discord"></i>
                </a>
            </div>
        </footer>
    </div>
</template>