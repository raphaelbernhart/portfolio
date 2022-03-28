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
                ref="nuxtStartupTransitionContainer"
                class="min-h-screen w-screen bg-white transition-opacity duration-75"
                data-scroll-container
            >
                <Navigation />
                <SocialMediaFixed />
                <Nuxt data-scroll-section />
                <Footer data-scroll-section />
            </div>
        </LocomotiveScroll>
        <Transition />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Transition from '@/components/TransitionComponent.vue';
import SocialMediaFixed from '~/components/SocialMediaFixed.vue';

export default Vue.extend({
    name: 'HomePage',
    components: {
        Transition,
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
                    disableLerp: true,
                });
            }, 150);
        },
    },
    mounted() {
        window.addEventListener('load', () => {
            this.$nuxt.$emit('update-locomotive');
        });

        this.changeFaviconHostDarkMode();

        // Fade Up Animation Event
        this.fadeUpAnimation();
        this.fadeLeftAnimation();
        this.fadeUpImageAnimation();
    },
    methods: {
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
                    faviconTag.href = '/favicon-light.svg';
                else faviconTag.href = '/favicon-dark.svg';
            }, 1000);
        },
        fadeUpAnimation() {
            const alreadyAnimated: Array<any> = [];
            this.$locomotive.on('scroll', (elements: Record<string, any>) => {
                Object.values(elements.currentElements).forEach((e: any) => {
                    if (e.class === 'FADE_UP') {
                        const htmlElement: HTMLElement = e.el;
                        if (alreadyAnimated.includes(htmlElement)) return;
                        alreadyAnimated.push(htmlElement);

                        let animationDelay = 0;

                        if (htmlElement.dataset.scrollAnimationDelay) {
                            animationDelay = parseInt(
                                htmlElement.dataset.scrollAnimationDelay,
                            );
                        }

                        // Fade Up Animation
                        (this as any).$anime({
                            targets: htmlElement,
                            easing: 'easeInOutQuad',
                            translateY: [50, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            delay: animationDelay,
                        });
                    }
                });
            });
        },
        fadeLeftAnimation() {
            const alreadyAnimated: Array<any> = [];
            this.$locomotive.on('scroll', (elements: Record<string, any>) => {
                Object.values(elements.currentElements).forEach((e: any) => {
                    if (e.class === 'FADE_LEFT') {
                        if (alreadyAnimated.includes(e.el)) return;
                        alreadyAnimated.push(e.el);

                        // Fade Up Animation
                        (this as any).$anime({
                            targets: e.el,
                            easing: 'easeInOutQuad',
                            translateX: [50, 0],
                            opacity: [0, 1],
                            duration: 1000,
                        });
                    }
                });
            });
        },
        fadeUpImageAnimation() {
            const alreadyAnimated: Array<any> = [];
            this.$locomotive.on('scroll', (elements: Record<string, any>) => {
                Object.values(elements.currentElements).forEach((e: any) => {
                    if (e.class === 'FADE_UP_IMAGE') {
                        const htmlElement: HTMLElement = e.el;
                        if (alreadyAnimated.includes(htmlElement)) return;
                        alreadyAnimated.push(htmlElement);

                        // Add overflow-hidden class to parent
                        htmlElement.classList.add('overflow-hidden');

                        let animationDelay = 0;

                        if (htmlElement.dataset.scrollAnimationDelay) {
                            animationDelay = parseInt(
                                htmlElement.dataset.scrollAnimationDelay,
                            );
                        }

                        // Fade Up Animation
                        (this as any).$anime({
                            targets: htmlElement.childNodes[0],
                            easing: 'easeInOutQuad',
                            translateY: [125, 0],
                            opacity: [0, 1],
                            duration: 1000,
                            delay: animationDelay,
                        });
                    }
                });
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
.FADE_UP {
    opacity: 0;
}
.FADE_LEFT {
    opacity: 0;
}
.FADE_UP_IMAGE img {
    opacity: 0;
}
</style>
