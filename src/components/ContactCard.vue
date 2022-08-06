<script>
    export default {
        props: ['element']
    }
</script>

<template>
    <a :href="element.link" target="_blank" class="bg-gray-200 py-4 px-5 rounded-sm flex items-center gap-4 shadow-sm transition ease-in hover:bg-gray-300 ring-offset-2 ring-gray-300 focus:ring-1">
        <i :class="element.icon" class="text-4xl"></i>
        <div class="text-black/70">
            <h1 class="font-semibold text-black">{{ element.label }}</h1>
            {{ element.description }}
        </div>
    </a>
</template>