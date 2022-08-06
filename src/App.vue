<script setup>
    import Navbar from '@/components/Navbar.vue'
    import Footer from '@/components/Footer.vue'
</script>

<template>
    <div class="font-poppins min-h-screen py-6 px-[30%] flex flex-col gap-16">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>