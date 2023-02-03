<template>
    <div class="min-h-screen py-6 px-[23%] flex flex-col gap-28 bg-slate-900">
        <nav class="flex items-center justify-between">
            <a href="/" class="text-3xl font-bold text-white/80">
                <span>ygtdev</span>
                <span class="mr-0.5 text-[#94a3b8]">.</span>
                <span class="text-lg">com</span>
            </a>
            <div class="flex gap-8">
                <RouterLink to="/" class="text-white/60 font-medium transition hover:text-white/80">Home</RouterLink>
            </div>
            <div class="flex gap-2">
                <a href="https://discord.gg/CCExrpU" target="_blank" class="h-10 w-10 flex items-center justify-center rounded-full text-white/80 transition hover:bg-zinc-400/20">
                    <i class="fa-brands fa-discord"></i>
                </a>
                <a href="https://github.com/ygtdev" target="_blank" class="h-10 w-10 flex items-center justify-center rounded-full text-white/80 transition hover:bg-zinc-400/20">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </nav>
        <RouterView v-slot="{ Component }">
            <Transition>
                <component :is="Component" />
            </Transition>
        </RouterView>
        <footer class="inline-grid gap-4">
            <div class="flex items-center justify-between gap-5">
                <div class="flex-1 h-1 bg-[#94a3b8]/20"></div>
                <h1 class="text-4xl text-[#94a3b8] font-bold">COOL#0356</h1>
                <div class="flex-1 h-1 bg-[#94a3b8]/20"></div>
            </div>
            <div class="flex items-center justify-between">
                <h1 class="text-sm text-white/60">© 2023 ygtdev.com</h1>
                <h1 class="text-sm text-white/60">
                    Powered with
                    <span class="text-pink-600">
                        <i class="fa-solid fa-heart"></i>
                    </span>
                    by
                    <span class="text-white/80 font-semibold">COOL</span>
                </h1>
            </div>
        </footer>
    </div>
</template>

<style>
    body {
        font-family: 'Poppins', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: #0f172a;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #1e293b;
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>