<template>
    <div class="absolute left-0 top-0 w-screen h-screen bg-primary z-30 p-12 text-primary">
        <div class="relative w-full">

            <div class="absolute top-0 left-0 w-full flex justify-between items-center">
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

                <!-- Close Button -->
                <div class="w-12 h-12 cursor-pointer p-2.5 mr-8 hover:text-gray-400 transition-colors">
                    <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="26.042" height="26.042" viewBox="0 0 26.042 26.042">
                        <g id="close-outline" transform="translate(-142.586 -142.586)">
                            <path class="stroke-current" data-name="Pfad 41" d="M167.214,167.214,144,144" transform="translate(0 0)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            <path class="stroke-current" data-name="Pfad 42" d="M167.214,144,144,167.214" transform="translate(0 0)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </g>
                    </svg>
                </div>
            </div>

        </div>

        <div class="container h-full flex items-center">
            <div class="w-full grid grid-cols-6">
                <div class="col-span-4 flex flex-col gap-y-8 items-start">
                    <NavigationLink text="Home" route="/" :index="0" />
                    <NavigationLink text="Works" route="/works" :index="1" />
                    <NavigationLink text="Profile" route="/profile" :index="2" />
                    <NavigationLink text="Contact" route="/contact" :index="3" />
                </div>
                <div class="col-span-2">
                    <div class="flex flex-col justify-center gap-y-16 text-primary text-lg h-full">
                        <div class="flex flex-col gap-y-2 items-start">
                            <span class="font-bold">Say Hi!</span>
                            <a class="underline inline-block" href="mailto:mail@raphaelbernhart.at">mail@raphaelbernhart.at</a>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <span class="font-bold">Address</span>
                            <div class="flex flex-col gap-y-1 items-start">
                                <span>Achenweg 30</span>
                                <span>6364 Brixen im Thale</span>
                                <span class="uppercase">Austria</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <span class="font-bold">Social Media</span>
                            <div class="flex flex-col flex-grow-0 gap-y-1 items-start">
                                <a class="underline" href="">Behance</a>
                                <a class="underline" href="">Github</a>
                                <a class="underline" href="">Dribbble</a>
                                <a class="underline" href="">Unsplash</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import NavigationLink from '~/components/NavigationLink.vue'

    export default Vue.extend({
        name: 'NavigationMenuComponent',
        components: {
            NavigationLink
        }
    })
</script>