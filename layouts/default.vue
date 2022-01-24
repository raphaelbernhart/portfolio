<template>
    <div class="relative overflow-x-hidden">
        <LocomotiveScroll
            ref="scroller"
            :getted-options="{
                smooth: true,
                direction: 'vertical',
            }"
        >
            <div id="nuxt-startup-transition-container" class="bg-white w-screen min-h-screen opacity-0 transition-opacity duration-75" data-scroll-container>
                <Navigation />
                <Nuxt class="pb-12" data-scroll-section />
                <Footer data-scroll-section />
            </div>

            <!-- Transition -->
            <div class="absolute top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden z-40">
                <div class="left-layer pointer-events-auto"></div>
                <div class="left-layer left-layer--2 pointer-events-auto"></div>
                <div class="left-layer left-layer--3 pointer-events-auto"></div>
                <div class="left-layer left-layer--4 pointer-events-auto"></div>
            </div>
        </LocomotiveScroll>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'HomePage',
        mounted() {
            this.transitionInit();

            window.addEventListener('load', () => {
                this.$nuxt.$emit('update-locomotive')
            })
        },
        methods: {
            transitionInit() {
                // eslint-disable-next-line nuxt/no-globals-in-created
                const layer = document.querySelectorAll('.left-layer');

                layer.forEach(item => {
                    item.classList.toggle('active')
                })

                const app = document.querySelector('#nuxt-startup-transition-container');
                setTimeout(() => {
                    app?.classList.add('opacity-100');
                }, 450);
            },
            toggleDarkMode() {
                // On page load or when changing themes, best to add inline in `head` to avoid FOUC
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }

                // Whenever the user explicitly chooses light mode
                localStorage.theme = 'light'

                // Whenever the user explicitly chooses dark mode
                localStorage.theme = 'dark'

                // Whenever the user explicitly chooses to respect the OS preference
                localStorage.removeItem('theme')
            }
        }
    })
</script>

<style>
    * {
        font-synthesis: none;
        -moz-font-feature-settings: 'kern';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>