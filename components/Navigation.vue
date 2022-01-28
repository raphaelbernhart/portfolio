<template>
    <div>
        <div class="bg-primary md:bg-transparent p-12 w-screen fixed z-30 pointer-events-none md:mix-blend-difference text-[#fffbef]">

            <div class="relative w-full flex justify-between items-center gap-x-4">

                <!-- LOGO -->
                <div class="flex-initial w-14 h-14 cursor-pointer pointer-events-auto hover:text-gray-400 transition-colors relative z-40" @click="$router.push({ path: '/' })">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve">
                        <g class="fill-current">
                            <g>
                                <path d="M0.1,5.5h15.3c10,0,14.4,5.9,14.4,12.2c0,5.7-4.1,11.3-12.6,12.2l14.7,18.7h-7.4L9.8,30H7.5v18.5H0.1V5.5z M7.5,7.3v20.9h5.8c5.2,0,9-5.3,9-11c0-5.7-3.9-9.9-9.2-9.9H7.5z" />
                                <path d="M49.9,5.5c4.9,0,14,2.2,14,10.9c0,5.1-2.9,8.1-6.7,9.5C62,26.7,68,29.9,68,36.8c0,8.2-7.7,11.8-16.1,11.8 H33.6V5.5H49.9z M41,7.1v18.5h6c4,0,9.5-2,9.5-9.7c0-7.8-5.5-8.8-9.5-8.8H41z M41,46.9h9.6c6.7,0,10-4.7,10-10.3 c0-5.3-3-9.2-9.4-9.2H41V46.9z" />
                            </g>
                            <rect id="Rechteck_7" y="57.2" class="st1" width="68" height="5.4" />
                        </g>
                    </svg>
                </div>

                <!-- Links -->
                <div class="flex gap-x-10 font-thin pointer-events-auto items-center">
                    <div class="font-display text-xl pt-[3px]">
                        <nuxt-link class="cursor-pointer hover:text-gray-400 transition-colors" :to="switchLocalePath($i18n.locales[1].code)">EN</nuxt-link>
                        /
                        <nuxt-link class="cursor-pointer hover:text-gray-400 transition-colors" :to="switchLocalePath($i18n.locales[0].code)">DE</nuxt-link>
                    </div>
                    <div class="w-10 h-10 p-2 cursor-pointer hover:text-gray-400 transition-colors">
                        <svg class="w-full h-full" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 18.9 18.9" xml:space="preserve">
                            <g transform="translate(-48 -48)" class="fill-current">
                                <g id="Gruppe_2" transform="translate(48 48)">
                                    <path class="st0" d="M2.1,4.2C0.9,4.2,0,3.3,0,2.1S0.9,0,2.1,0c1.2,0,2.1,0.9,2.1,2.1l0,0C4.2,3.3,3.3,4.2,2.1,4.2z" />
                                    <path class="st0" d="M9.4,4.2c-1.2,0-2.1-0.9-2.1-2.1S8.3,0,9.4,0s2.1,0.9,2.1,2.1l0,0C11.6,3.3,10.6,4.2,9.4,4.2z" />
                                    <path class="st0" d="M16.8,4.2c-1.2,0-2.1-0.9-2.1-2.1S15.6,0,16.8,0s2.1,0.9,2.1,2.1l0,0C18.9,3.3,17.9,4.2,16.8,4.2z" />
                                    <path class="st0" d="M2.1,11.6C0.9,11.6,0,10.6,0,9.4s0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1l0,0 C4.2,10.6,3.3,11.6,2.1,11.6z" />
                                    <path class="st0" d="M9.4,11.6c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C11.6,10.6,10.6,11.6,9.4,11.6z" />
                                    <path class="st0" d="M16.8,11.6c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C18.9,10.6,17.9,11.6,16.8,11.6z" />
                                    <path class="st0" d="M2.1,18.9c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1l0,0 C4.2,17.9,3.3,18.9,2.1,18.9z" />
                                    <path class="st0" d="M9.4,18.9c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C11.6,17.9,10.6,18.9,9.4,18.9z" />
                                    <path class="st0" d="M16.8,18.9c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C18.9,17.9,17.9,18.9,16.8,18.9z" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>

                <!-- Social Media -->
                <div class="hidden md:flex absolute left-0 top-0 h-screen w-7 flex-col gap-y-5 justify-center pb-12">
                    <a href="https://www.behance.net/raphaelbernhart" target="_blank" class="w-full cursor-pointer pointer-events-auto hover:text-gray-400 transition-colors">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                            <title>logo-behance</title>
                            <g class="fill-current">
                                <path d="M344.09 233.55c-28.87 0-32.88 28.82-32.88 28.82h61.39c-.01 0 .39-28.82-28.51-28.82z" class="fill-current"></path>
                                <path d="M204.82 262.37H150.4v49.96h48.18c.82 0 2.05.02 3.48 0 7.75-.18 22.44-2.44 22.44-24.29.01-25.94-19.68-25.67-19.68-25.67z" class="fill-current"></path>
                                <path d="M256.01 32C132.29 32 32 132.27 32 255.99S132.29 480 256.01 480C379.71 480 480 379.71 480 255.99 480 132.28 379.7 32 256.01 32zm47.15 137.63h77.11v23.01h-77.11v-23.01zm-38.98 120.74c0 57.05-59.36 55.16-59.36 55.16h-97.26v-186.9h97.26c29.55 0 52.87 16.32 52.87 49.76s-28.52 35.57-28.52 35.57c37.6 0 35.01 46.41 35.01 46.41zm144.26-3.06h-96.85c0 34.71 32.89 32.53 32.89 32.53 31.06 0 29.97-20.11 29.97-20.11h32.9c0 53.37-63.98 49.71-63.98 49.71-76.74 0-71.8-71.46-71.8-71.46s-.07-71.8 71.8-71.8c75.65.01 65.07 81.13 65.07 81.13z" class="fill-current"></path>
                                <path d="M218.04 211.29c0-19.44-13.22-19.44-13.22-19.44H150.4v41.7h51.04c8.81 0 16.6-2.83 16.6-22.26z" class="fill-current"></path>
                            </g>
                        </svg>
                    </a>
                    <a href="https://github.com/raphaelbernhart" target="_blank" class="w-full cursor-pointer pointer-events-auto hover:text-gray-400 transition-colors">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                            <title>logo-github</title>
                            <g class="fill-current">
                                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                            </g>
                        </svg>
                    </a>
                    <a href="https://dribbble.com/raphaelbernhart" target="_blank" class="w-full cursor-pointer pointer-events-auto hover:text-gray-400 transition-colors">
                        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                            <title>logo-dribbble</title>
                            <g class="fill-current">
                                <path d="M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32zm142.22 103.25a186.36 186.36 0 0 1 44 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73zM256 69.33a185.81 185.81 0 0 1 119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0 1 46-5.95zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0 1 96.34-120.31zM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 0 0-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0 1 69.33 256c0-3 .12-5.95.35-8.87zM256 442.67a185.57 185.57 0 0 1-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 0 1 322 430.42a185.06 185.06 0 0 1-66 12.25zm100.92-29.75a672.61 672.61 0 0 0-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 0 1-84.58 136.27z"></path>
                            </g>
                        </svg>
                    </a>
                </div>

            </div>

        </div>
        <NavigationMenu />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NavigationMenu from '~/components/NavigationMenu.vue'

    export default Vue.extend({
        name: 'NavigationComponent',
        components: {
            NavigationMenu
        }
    })
</script>