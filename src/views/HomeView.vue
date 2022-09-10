<template>
    <header class="flex items-center justify-between gap-4 p-6 bg-secondary-500 rounded-xl">
        <div class="flex flex-col gap-2 flex-1">
            <h1 class="text-4xl font-bold">COOL#0356</h1>
            <p>Hello World! I'm Yigit. I am 17 years old and I am studying at High School in Turkey. I spend most of my time playing games and improving the games I play. I usually develop projects using <x-link color="primary" href="https://vuejs.org/" target="_blank">Vue.js</x-link> + <x-link color="primary" href="https://tailwindcss.com/" target="_blank">TailwindCSS</x-link>.</p>
        </div>
    </header>
    <section class="flex flex-col gap-2">
        <h1 class="text-xl font-semibold">Activity</h1>
        <div class="flex items-center gap-3 p-3 rounded-xl font-medium bg-secondary-500">
            <img src="/activity.png" alt="Activity Image" class="h-24 w-24 rounded-lg">
            <div class="w-full flex flex-col gap-2">
                <div class="leading-3">
                    <h1 class="text-lg font-bold">Disney+</h1>
                    <span class="text-sm">Watching The Punishe.</span>
                </div>
                <div class="flex flex-col gap-0.5">
                    <div class="flex items-center justify-between text-xs">
                        <span>18:51</span>
                        <span>56:34</span>
                    </div>
                    <x-progress :percentage="50" color="primary"/>
                </div>
            </div>
        </div>
    </section>
    <section class="flex flex-col gap-2">
        <h1 class="text-xl font-semibold">Technologies</h1>
        <div class="flex flex-wrap justify-center gap-2 p-2 rounded-xl font-medium border border-secondary-500">
            <div class="flex items-center gap-1.5 py-2 px-3 bg-secondary-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#dd4b25" class="flex-shrink-0 h-5 w-5">
                    <path d="M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z"></path>
                </svg>
                HTML5
            </div>
            <div class="flex items-center gap-1.5 py-2 px-3 bg-secondary-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon flex-shrink-0 h-5 w-5 rounded-lg" viewBox="0 0 128 128">
                    <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path>
                    <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path>
                    <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path>
                    <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path>
                    <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path>
                    <path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                </svg>
                CSS3
            </div>
            <div class="flex items-center gap-1.5 py-2 px-3 bg-secondary-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#EFD81D" class="flex-shrink-0 h-5 w-5 rounded-sm">
                    <path d="M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z"></path>
                </svg>
                JavaScript
            </div>
            <div class="flex items-center gap-1.5 py-2 px-3 bg-secondary-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="flex-shrink-0 h-5 w-5">
                    <path d="M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z" fill="#35495E"></path>
                    <path d="M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z" fill="#41B883"></path>
                </svg>
                Vue.js
            </div>
            <div class="flex items-center gap-1.5 py-2 px-3 bg-secondary-500 rounded-lg">
                <svg class="flex-shrink-0 h-5 w-5" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z" fill="#80EEC0"></path>
                    <path d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z" fill="#00DC82"></path>
                </svg>
                Nuxt.js
            </div>
            <div class="flex items-center gap-1.5 py-2 px-3 bg-secondary-500 rounded-lg">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 h-5 w-5">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.333 9.933C7.088 6.911 8.978 5.4 12 5.4c4.533 0 5.1 3.4 7.367 3.967 1.511.377 2.833-.189 3.966-1.7-.755 3.022-2.644 4.533-5.666 4.533-4.534 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.967 1.7zm-5.666 6.8C1.422 13.711 3.31 12.2 6.333 12.2c4.534 0 5.1 3.4 7.367 3.967 1.51.377 2.833-.19 3.967-1.7C16.91 17.489 15.022 19 12 19c-4.533 0-5.1-3.4-7.367-3.967-1.511-.378-2.833.189-3.966 1.7z" fill="url(#prefix__paint0_linear)"></path>
                    <defs>
                        <linearGradient id="prefix__paint0_linear" x1=".667" y1="-6.689" x2="23.333" y2="31.089" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2383AE"></stop>
                            <stop offset="1" stop-color="#6DD7B9"></stop>
                        </linearGradient>
                    </defs>
                </svg>
                TailwindCSS
            </div>
        </div>
    </section>
    <section class="flex flex-col gap-2">
        <h1 class="text-xl font-semibold">Pinned Repositories</h1>
        <div class="grid grid-cols-2 gap-2 font-medium">
            <a href="https://github.com/ygtdev/website" target="_blank" class="flex flex-col gap-1 py-3 px-4 bg-secondary-500 rounded-lg">
                <h1>website</h1>
                <p class="text-sm text-tertiary-700">👽 Source codes of my personal website.</p>
            </a>
            <a href="https://github.com/ygtdev/ygtdev" target="_blank" class="flex flex-col gap-1 py-3 px-4 bg-secondary-500 rounded-lg">
                <h1>ygtdev</h1>
                <p class="text-sm text-tertiary-700">🥳 Hi there! I'm developer, student & designer.</p>
            </a>
            <a href="https://github.com/ygtdev/ygt-warehouse" target="_blank" class="flex flex-col gap-1 py-3 px-4 bg-secondary-500 rounded-lg">
                <h1>ygt-warehouse</h1>
                <p class="text-sm text-tertiary-700">🏠 Warehouse system for QBCore</p>
            </a>
            <a href="https://github.com/ygtdev/api" target="_blank" class="flex flex-col gap-1 py-3 px-4 bg-secondary-500 rounded-lg">
                <h1>api</h1>
                <p class="text-sm text-tertiary-700">🔧 Open source API system.</p>
            </a>
        </div>
    </section>
</template>