<script>
    export default {
        props: ['lanyard']
    }
</script>

<template>
    <div class="bg-gray-200 rounded-md p-3 flex items-center gap-4">
        <img src="../assets/disneyplus.png" class="rounded-md h-24 w-24">
        <div class="flex flex-col gap-2 w-full">
            <div class="text-sm">
                <h1 class="font-semibold text-lg">Disney+</h1>
                <p>The Punishe izliyor.</p>
            </div>
            <div class="text-xs font-medium">
                <div class="flex items-center justify-between px-0.5">
                    <p>18:51</p>
                    <p>56:34</p>
                </div>
                <div class="bg-gray-300 h-2 rounded-full overflow-hidden">
                    <div class="h-full w-1/3 bg-blue-400"></div>
                </div>
            </div>
        </div>
    </div>
</template>