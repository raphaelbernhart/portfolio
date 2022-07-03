<script lang="ts">
/* eslint-disable vue/no-v-html */

import Vue from 'vue';
import RightsBar from '@/components/RightsBar.vue';
import { sanitize } from '@/services/Helpers';

export default Vue.extend({
    name: 'FooterComponent',
    components: {
        RightsBar,
    },
    methods: {
        sanitize,
    },
});
</script>

<template>
    <div>
        <div
            class="relative z-10 min-h-screen w-screen bg-primary pt-16 sm:pt-56 md:pt-40 pb-4 md:min-h-0"
        >
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-4">
                    <div class="hidden md:block"></div>
                    <div class="col-span-3">
                        <h3
                            class="max-w-2xl font-display text-6xl sm:text-7xl md:text-8xl text-primary"
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
                                    <a
                                        class="underline"
                                        href="https://unsplash.com/@raphaelbernhart"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >Unsplash</a
                                    >
                                    <a
                                        class="underline"
                                        href="https://vimeo.com/raphaelbernhart"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        >Vimeo</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RightsBar />
    </div>
</template>
