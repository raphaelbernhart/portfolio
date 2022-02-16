<template>
    <div class="relative overflow-x-hidden">
        <LocomotiveScroll
            ref="scroller"
            :getted-options="{
                smooth: true,
                direction: 'vertical',
            }"
        >
            <div
                id="nuxt-startup-transition-container"
                class="min-h-screen w-screen bg-white transition-opacity duration-75"
                data-scroll-container
            >
                <Navigation />
                <SocialMediaFixed />
                <Nuxt data-scroll-section />
                <Footer data-scroll-section />
            </div>

            <!-- Transition -->
            <div
                class="pointer-events-none absolute top-0 left-0 z-40 h-screen w-screen overflow-hidden"
            >
                <div class="left-layer pointer-events-auto"></div>
                <div class="left-layer left-layer--2 pointer-events-auto"></div>
                <div class="left-layer left-layer--3 pointer-events-auto"></div>
                <div class="left-layer left-layer--4 pointer-events-auto"></div>
            </div>
        </LocomotiveScroll>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SocialMediaFixed from '~/components/SocialMediaFixed.vue';

export default Vue.extend({
    name: 'HomePage',
    components: {
        SocialMediaFixed,
    },
    computed: {
        isWorksRoute() {
            const path = this.$route.path;
            if (path !== '/works' && path !== '/en/works') return false;
            else return true;
        },
    },
    watch: {
        $route(_to, _from) {
            setTimeout(() => {
                this.$nuxt.$emit('update-locomotive');
                this.$nuxt.$emit('scroll-top-locomotive', {
                    duration: 0,
                });
            }, 250);
        },
    },
    mounted() {
        this.transitionInit();

        window.addEventListener('load', () => {
            this.$nuxt.$emit('update-locomotive');
        });

        this.changeFaviconHostDarkMode();

        // Fade Up Animation Event
        this.fadeUpAnimation();
    },
    methods: {
        transitionInit() {
            // eslint-disable-next-line nuxt/no-globals-in-created
            const layer = document.querySelectorAll('.left-layer');

            layer.forEach((item) => {
                item.classList.toggle('active');
            });

            const app = document.querySelector(
                '#nuxt-startup-transition-container',
            );
            setTimeout(() => {
                app?.classList.add('opacity-100');
            }, 450);
        },
        toggleDarkMode() {
            // On page load or when changing themes, best to add inline in `head` to avoid FOUC
            if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light';

            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark';

            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme');
        },
        changeFaviconHostDarkMode() {
            const faviconTag: any = document.getElementById('favicon-tag');
            const darkModeEnabled = window.matchMedia(
                '(prefers-color-scheme: dark)',
            );

            setInterval(() => {
                if (darkModeEnabled.matches)
                    faviconTag.href = './favicon-light.svg';
                else faviconTag.href = './favicon-dark.svg';
            }, 1000);
        },
        fadeUpAnimation() {
            // Fade Up Animation
            const fadeUpAnimation = (this as any).$anime({
                targets: '.fade-up',
                easing: 'easeInOutQuad',
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 1000,
                autoplay: false,
            });

            this.$locomotive.on('call', (e: any) => {
                if (e === 'FADE_UP') {
                    fadeUpAnimation.play();
                }
            });
        },
    },
});
</script>

<style>
* {
    font-synthesis: none;
    -moz-font-feature-settings: 'kern';
    font-feature-settings: 'kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.no-ligature {
    -moz-font-feature-settings: 'liga' off;
    font-feature-settings: 'liga' off;
}
.underline-offset-3 {
    text-underline-offset: 3px;
}
</style>
