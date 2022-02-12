<template>
    <div
        class="relative z-10 min-h-screen w-screen bg-primary pt-40 pb-4 md:min-h-0"
    >
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-4">
                <div class="hidden md:block"></div>
                <div class="col-span-3">
                    <h3 class="max-w-lg font-display text-8xl text-primary">
                        Let's stay in touch
                    </h3>
                    <div class="relative my-8">
                        <div
                            class="absolute left-0 top-0 h-[1px] w-screen bg-primaryColor"
                        ></div>
                    </div>
                    <div
                        class="grid grid-cols-1 gap-y-8 pt-12 text-lg text-primary sm:grid-cols-2 lg:grid-cols-3"
                    >
                        <div class="flex flex-col items-start gap-y-2">
                            <span class="font-bold">Say Hi!</span>
                            <a
                                class="inline-block underline"
                                href="mailto:mail@raphaelbernhart.at"
                                >mail@raphaelbernhart.at</a
                            >
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <span class="font-bold">Address</span>
                            <div class="flex flex-col items-start gap-y-1">
                                <span>Achenweg 30</span>
                                <span>6364 Brixen im Thale</span>
                                <span class="uppercase">Austria</span>
                            </div>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <span class="font-bold">Social Media</span>
                            <div
                                class="flex flex-grow-0 flex-col items-start gap-y-1"
                            >
                                <a class="underline" href="">Behance</a>
                                <a class="underline" href="">Github</a>
                                <a class="underline" href="">Dribbble</a>
                                <a class="underline" href="">Unsplash</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative mt-24">
                <!-- <div class="absolute left-0 bottom-0 flex flex-row flex-wrap gap-x-16 gap-y-2 text-white text-sm">
                    <div>© {{ new Date().getFullYear() }} Raphael Bernhart | All Rights Reserved</div>
                    <div class="flex flex-nowrap gap-x-4">
                        <router-link :to="{ path: '/imprint' }" class="hover:text-gray-400 transition-colors underline" >Imprint</router-link>
                        <router-link :to="{ path: '/privacy' }" class="hover:text-gray-400 transition-colors underline" >Privacy Policy</router-link>
                    </div>
                </div> -->
                <div class="grid grid-cols-1 text-primary md:grid-cols-4">
                    <div class="pr-4">
                        © {{ new Date().getFullYear() }} Raphael Bernhart | All
                        Rights Reserved
                    </div>
                    <div class="col-span-3 flex flex-nowrap gap-x-4">
                        <router-link
                            :to="{ path: '/imprint' }"
                            class="underline transition-colors hover:text-gray-400"
                            >Imprint</router-link
                        >
                        <router-link
                            :to="{ path: '/privacy' }"
                            class="underline transition-colors hover:text-gray-400"
                            >Privacy Policy</router-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'FooterComponent',
});
</script>
