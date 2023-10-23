<template>
    <div class="h-screen flex items-center justify-center">
        <div class="flex flex-col items-center gap-y-4">
            <h1 class="text-4xl text-slate-900 dark:text-slate-200 font-bold">
                Yiğit Gürses
            </h1>
            <p class="text-slate-700 dark:text-slate-400">
                A full-stack software developer from Turkey.
            </p>
            <div class="flex gap-x-4">
                <a
                    href="https://github.com/ygtdev"
                    target="_blank"
                    class="text-slate-700 dark:text-slate-400 transition hover:!text-green-500"
                    ><span><i class="fa-brands fa-github"></i></span></a
                ><a
                    href="https://instagram.com/gursesyigitt/"
                    target="_blank"
                    class="text-slate-700 dark:text-slate-400 transition hover:!text-green-500"
                    ><span><i class="fa-brands fa-instagram"></i></span></a
                ><a
                    href="https://twitter.com/yigitgurses2012"
                    target="_blank"
                    class="text-slate-700 dark:text-slate-400 transition hover:!text-green-500"
                    ><span><i class="fa-brands fa-twitter"></i></span></a
                ><a
                    href="https://linkedin.com/in/yiğit-gürses-b7b486257/"
                    target="_blank"
                    class="text-slate-700 dark:text-slate-400 transition hover:!text-green-500"
                    ><span><i class="fa-brands fa-linkedin"></i></span
                ></a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Home'
})
</script>
