<script lang="ts">
/* eslint-disable vue/no-v-html */

import Vue from 'vue';
import { sanitize } from '@/services/Helpers';

export default Vue.extend({
    name: 'FooterComponent',
    methods: {
        sanitize,
    },
});
</script>

<template>
    <div
        class="relative z-10 min-h-screen w-screen bg-primary pt-56 md:pt-40 pb-4 md:min-h-0"
    >
        <div class="container">
            <div class="grid grid-cols-1 md:grid-cols-4">
                <div class="hidden md:block"></div>
                <div class="col-span-3">
                    <h3
                        class="max-w-2xl font-display text-7xl md:text-8xl text-primary"
                        v-html="sanitize($t('footer.leading'))"
                    ></h3>
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
                                <a
                                    class="underline"
                                    href="https://www.behance.net/raphaelbernhart"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >Behance</a
                                >
                                <a
                                    class="underline"
                                    href="https://github.com/raphaelbernhart"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >Github</a
                                >
                                <a
                                    class="underline"
                                    href="https://dribbble.com/raphaelbernhart"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >Dribbble</a
                                >
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
                    <div
                        class="col-span-3 flex flex-wrap gap-x-6 mt-4 md:mt-0 gap-y-4 md:gap-y-0"
                    >
                        <nuxt-link
                            :to="localePath('/imprint')"
                            class="underline transition-colors hover:text-gray-400"
                            >{{ $t('footer.imprint') }}
                        </nuxt-link>
                        <nuxt-link
                            :to="localePath('/imprint')"
                            class="underline transition-colors hover:text-gray-400"
                            >{{ $t('footer.privacy') }}
                        </nuxt-link>
                        <nuxt-link
                            :to="localePath('/agb')"
                            class="underline transition-colors hover:text-gray-400"
                            >{{ $t('footer.agb') }}
                        </nuxt-link>
                    </div>
                    <div
                        class="relative mt-16 sm:mt-0 sm:absolute bottom-0 md:bottom-auto right-0 text-sm"
                    >
                        <a
                            href="https://github.com/raphaelbernhart/portfolio"
                            target="_blank"
                            class="font-bold"
                            >v{{ $config.PROJECT_VERSION }}</a
                        >
                        made with ♥️ by
                        <a
                            href="https://github.com/raphaelbernhart"
                            target="_blank"
                            class="font-bold"
                            >@raphaelbernhart</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
