<script>
    import { store } from '@/store/index.js'
    import ContactCard from '@/components/ContactCard.vue'
    import LanyardCard from '@/components/LanyardCard.vue'

    export default {
        data() {
            return {
                store
            };
        },
        mounted() {
            lanyard({
                userId: '150612752610754560',
            }).then(res => {
                this.lanyard = res
            })
        },
        computed: {
            calculateAge() {
                return moment().diff(this.store.personal.date_of_birth_date, 'years') || 'Unknown';
            }
        },
        components: { ContactCard, LanyardCard }
    }
</script>

<template>
    <main class="flex flex-col gap-16">
        <header class="border border-gray-200 p-4 rounded-md shadow-sm flex flex-col gap-4">
            <div class="flex items-center justify-between gap-4">
                <div class="text-sm">
                    <h1 class="font-bold text-4xl">Hi There. I'm COOL 👋</h1>
                    <p class=" text-black/80">
                        Hello world! I'm Yigit. I'm {{ calculateAge }} years old & I'm studying at High School in Turkey. I spend most of time playing games and development the games I play.
                    </p>
                    <div class="flex items-center gap-1 font-medium mt-0.5 text-green-400">
                        <p class="rounded-full h-2.5 w-2.5 cursor-pointer bg-green-400" v-tippy="{
                            content: 'Discord Status'
                        }"></p>
                        Online
                    </div>
                </div>
                <img src="../assets/logo.png" class="shadow-sm rounded-md h-32 w-32">
            </div>
            <LanyardCard />
        </header>
        <section class="flex flex-col gap-2 text-sm">
            <h1 class="font-bold text-2xl mx-1">Technologies 💻</h1>
            <div class="flex flex-wrap justify-center gap-2 border border-gray-200 p-4 rounded-md shadow-sm cursor-pointer font-medium">
                <a href="https://w3.org/html/" target="_blank" class="flex items-center gap-1.5 rounded-sm bg-gray-200 py-2 px-3 shadow-sm transition ease-in hover:bg-gray-300 ring-offset-2 ring-gray-300 focus:ring-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#dd4b25" class="flex-shrink-0 h-6 w-6">
                        <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path>
                    </svg>
                    HTML5
                </a>
                <a href="https://www.w3schools.com/css/" target="_blank" class="flex items-center gap-1.5 rounded-sm bg-gray-200 py-2 px-3 shadow-sm transition ease-in hover:bg-gray-300 ring-offset-2 ring-gray-300 focus:ring-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6" viewBox="0 0 128 128">
                        <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
                        <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
                        <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path>
                        <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path>
                        <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path>
                        <path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                    </svg>
                    CSS3
                </a>
                <a href="https://tailwindcss.com/" target="_blank" class="flex items-center gap-1.5 rounded-sm bg-gray-200 py-2 px-3 shadow-sm transition ease-in hover:bg-gray-300 ring-offset-2 ring-gray-300 focus:ring-1">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z" fill="url(#prefix__paint0_linear)"></path>
                        <defs>
                            <linearGradient id="prefix__paint0_linear" x1=".667" y1="-6.689" x2="23.333" y2="31.089" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#2383AE"></stop>
                                <stop offset="1" stop-color="#6DD7B9"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    TailwindCSS
                </a>
                <a href="https://www.javascript.com/" target="_blank" class="flex items-center gap-1.5 rounded-sm bg-gray-200 py-2 px-3 shadow-sm transition ease-in hover:bg-gray-300 ring-offset-2 ring-gray-300 focus:ring-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#EFD81D" class="flex-shrink-0 h-6 w-6">
                        <path d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"></path>
                    </svg>
                    JavaScript
                </a>
                <a href="https://vuejs.org/" target="_blank" class="flex items-center gap-1.5 rounded-sm bg-gray-200 py-2 px-3 shadow-sm transition ease-in hover:bg-gray-300 ring-offset-2 ring-gray-300 focus:ring-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="flex-shrink-0 h-6 w-6">
                        <path d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z" fill="#35495E"></path>
                        <path d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z" fill="#41B883"></path>
                    </svg>
                    Vue.js
                </a>
                <a href="https://www.lua.org/" target="_blank" class="flex items-center gap-1.5 rounded-sm bg-gray-200 py-2 px-3 shadow-sm transition ease-in hover:bg-gray-300 ring-offset-2 ring-gray-300 focus:ring-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-6 w-6" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" id="Ebene_1" x="0px" y="0px" width="947px" height="947px" viewBox="0 0 947 947" enable-background="new 0 0 947 947" xml:space="preserve">
                        <g>
                            <path fill="#000080" d="M835.5,473.6c0-199.8-162.2-362-362-362s-362,162.2-362,362c0,199.8,162.2,362,362,362   S835.5,673.4,835.5,473.6"></path>
                            <path fill="#FFFFFF" d="M729.5,323.6c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S729.5,382.1,729.5,323.6"></path>
                            <path fill="#000080" d="M941.5,111.5c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S941.5,170.1,941.5,111.5"></path>
                            <g>
                                <path fill="#FFFFFF" d="M258.1,627.8h117.3v26.7H227.8V417h30.3V627.8z"></path>
                                <path fill="#FFFFFF" d="M515.5,654.5v-23.8c-16,22.5-31.9,31.3-57,31.3c-33.2,0-54.4-18.2-54.4-46.6V483.8h27v120.9    c0,20.5,13.7,33.6,35.2,33.6c28.3,0,46.6-22.8,46.6-57.7v-96.8h27v170.7H515.5z"></path>
                                <path fill="#FFFFFF" d="M738.4,659.1c-8.8,2.3-13,2.9-18.6,2.9c-17.6,0-26.1-7.8-28-25.1c-19.2,17.6-36.5,25.1-58,25.1    c-34.5,0-56-19.5-56-50.5c0-22.2,10.1-37.5,30-45.6c10.4-4.2,16.3-5.5,54.7-10.4c21.5-2.6,28.3-7.5,28.3-18.9v-7.2    c0-16.3-13.7-25.4-38.1-25.4c-25.4,0-37.8,9.4-40.1,30.3h-27.4c0.7-16.9,3.9-26.7,11.7-35.5c11.4-12.7,31.9-19.9,56.7-19.9    c42,0,64.2,16.3,64.2,46.6v100.4c0,8.5,5.2,13.4,14.7,13.4c1.6,0,2.9,0,5.9-0.7V659.1z M690.8,570.1c-9.1,4.2-15,5.5-43.7,9.4    c-29,4.2-41.1,13.4-41.1,31.3c0,17.3,12.4,27.4,33.6,27.4c16,0,29.3-5.2,40.4-15.3c8.1-7.5,10.8-13,10.8-22.2V570.1z"></path>
                            </g>
                            <path fill="none" stroke="#808080" stroke-width="10.8612" stroke-miterlimit="10" stroke-dasharray="40.8475" d="M890.6,261   c33.5,65.8,51,138.6,51,212.5c0,258.4-209.7,468.1-468.1,468.1S5.4,731.9,5.4,473.5C5.4,215.1,215.1,5.4,473.5,5.4   c83.1,0,164.6,22.1,236.2,63.9"></path>
                        </g>
                    </svg>
                    Lua
                </a>
            </div>
        </section>
        <section class="flex flex-col gap-2 text-sm">
            <h1 class="font-bold text-2xl mx-1">Links 🔗</h1>
            <div class="grid grid-cols-2 gap-4">
                <ContactCard v-for="element in store.personal.links" :key="element" :element="element" />
            </div>
        </section>
    </main>
</template>