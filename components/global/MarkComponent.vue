<template>
    <div class="max-w-[380px] rotate-6 transform text-primary">
        <div class="relative h-full w-full">
            <svg
                id="animation"
                class="w-full"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 412.5 198.9"
                xml:space="preserve"
            >
                <path
                    class="stroke-animation stroke-current"
                    stroke-width="1"
                    fill="none"
                    d="M230.5,21.8c0,0-111.2,14.6-168,47.9C24.7,91.9,6.9,116.2,8.9,142.6c2.7,34.1,89.1,35.8,208.5,40.9 c105.8,4.5,173.4,23.7,185.9-43.5c7.7-41.4-90.6-139.3-208.9-103"
                />
                <path
                    class="stroke-animation stroke-current"
                    stroke-width="1"
                    fill="none"
                    d="M250.1,31.7c0,0-96-4.8-158,17.4c-65.6,23.5-69.4,72.5-64.8,90.5c10.6,41.8,83.9,52.4,182.3,43.3 c108.4-10.1,185.3,2.6,190.7-65.5C405.4,56.8,303.5,5.3,221,9.7"
                />
            </svg>
            <div
                class="absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden pt-10 pl-6 text-primary"
            >
                <p
                    v-anime="{
                        easing: 'easeInOutQuad',
                        duration: 800,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        delay: delay,
                    }"
                    class="max-w-[280px] text-center text-sm"
                >
                    {{ text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'MarkComponent',
    props: {
        text: {
            type: String,
            required: true,
        },
        delay: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    mounted() {
        const anime = (this as any).$anime;

        const tl = anime.timeline({
            easing: 'easeInOutSine',
            duration: 1000,
            delay(_el: any, i: number) {
                return i * 120;
            },
            loop: false,
        });

        tl.add(
            {
                targets: '#animation .stroke-animation',
                strokeDashoffset: [(this as any).$anime.setDashoffset, 0],
                direction: 'alternate',
            },
            this.delay,
        );
    },
});
</script>
