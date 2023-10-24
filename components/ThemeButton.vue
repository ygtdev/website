<template>
    <ClientOnly>
        <div class="fixed bottom-8 left-8">
            <button
                @click="toggleTheme"
                class="h-12 w-12 text-2xl text-slate-700 dark:text-slate-400 rounded-full transition hover:!text-green-500"
            >
                <Icon
                    v-if="colorMode.preference === 'light'"
                    name="line-md:sunny-filled"
                />
                <Icon
                    v-else-if="colorMode.preference === 'dark'"
                    name="line-md:moon-filled"
                />
            </button>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
// https://github.com/hooray
// https://github.com/vuejs/vitepress/pull/2347
// https://github.com/emirkabal/emirkabal.github.io

const colorMode = useColorMode()

const isAppearanceTransition =
    typeof document !== 'undefined' &&
    // @ts-expect-error experimental API
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const toggleTheme = (event: MouseEvent) => {
    if (!isAppearanceTransition)
        return (colorMode.preference =
            colorMode.preference === 'light' ? 'dark' : 'light')

    const x = event.clientX
    const y = event.clientY

    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
        colorMode.preference =
            colorMode.preference === 'light' ? 'dark' : 'light'

        await nextTick()
    })

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
        ]

        const isDarkTheme = colorMode.preference === 'dark'

        document.documentElement.animate(
            {
                clipPath: isDarkTheme ? clipPath.reverse() : clipPath
            },
            {
                duration: 400,
                easing: 'ease-in-out',
                pseudoElement: isDarkTheme
                    ? '::view-transition-old(root)'
                    : '::view-transition-new(root)'
            }
        )
    })
}
</script>

<style>
::view-transition-old(root),
::view-transition-new(root) {
    @apply animate-none;
}

::view-transition-old(root) {
    @apply z-10 dark:z-50;
}

::view-transition-new(root) {
    @apply z-50 dark:z-10;
}
</style>
