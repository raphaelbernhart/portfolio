<template>
    <!-- Navigation Menu -->
    <Transition @leave="onLeave">
        <div class="fixed left-0 top-0 z-30 h-screen w-screen text-primary">
            <div class="relative h-screen w-screen p-12">
                <div class="relative z-10 w-full">
                    <div
                        class="absolute top-0 left-0 flex w-full items-center justify-between"
                    >
                        <!-- LOGO -->
                        <!-- <div class="flex-initial w-14 h-14 cursor-pointer pointer-events-auto hover:text-gray-400 transition-colors relative z-40" @click="$router.push({ path: '/' })">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 68 68" style="enable-background:new 0 0 68 68;" xml:space="preserve">
                            <g class="fill-current">
                                <g>
                                    <path d="M0.1,5.5h15.3c10,0,14.4,5.9,14.4,12.2c0,5.7-4.1,11.3-12.6,12.2l14.7,18.7h-7.4L9.8,30H7.5v18.5H0.1V5.5z M7.5,7.3v20.9h5.8c5.2,0,9-5.3,9-11c0-5.7-3.9-9.9-9.2-9.9H7.5z" />
                                    <path d="M49.9,5.5c4.9,0,14,2.2,14,10.9c0,5.1-2.9,8.1-6.7,9.5C62,26.7,68,29.9,68,36.8c0,8.2-7.7,11.8-16.1,11.8 H33.6V5.5H49.9z M41,7.1v18.5h6c4,0,9.5-2,9.5-9.7c0-7.8-5.5-8.8-9.5-8.8H41z M41,46.9h9.6c6.7,0,10-4.7,10-10.3 c0-5.3-3-9.2-9.4-9.2H41V46.9z" />
                                </g>
                                <rect id="Rechteck_7" y="57.2" class="st1" width="68" height="5.4" />
                            </g>
                        </svg>
                    </div> -->

                        <!-- Close Button -->
                        <!-- <div id="close-button" class="w-16 h-16 cursor-pointer p-2.5 hover:text-gray-400 transition-colors origin-center relative z-10" @click="closeNavigation()">
                        <svg class="w-full h-full origin-center" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68">
                            <line class="stroke-current origin-center stroke-2" x1="10" y1="58" x2="58" y2="10" />
                            <line class="stroke-current origin-center stroke-2" x1="58" y1="58" x2="10" y2="10" />
                        </svg>
                    </div> -->
                    </div>
                </div>

                <div class="container relative z-10 flex h-full items-center">
                    <div class="grid w-full grid-cols-6">
                        <div
                            id="navigationLinkContainer"
                            class="col-span-4 flex flex-col items-start gap-y-8"
                        >
                            <NavigationLink text="Home" route="/" :index="0" />
                            <NavigationLink
                                text="Works"
                                route="/works"
                                :index="1"
                            />
                            <NavigationLink
                                text="Profile"
                                route="/profile"
                                :index="2"
                            />
                            <NavigationLink
                                text="Contact"
                                route="/contact"
                                :index="3"
                            />
                        </div>
                        <div class="col-span-2">
                            <div
                                id="sm-container"
                                class="flex h-full flex-col justify-center gap-y-16 text-lg text-primary"
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
                                    <div
                                        class="flex flex-col items-start gap-y-1"
                                    >
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
                                        <a class="underline" href=""
                                            >Dribbble</a
                                        >
                                        <a class="underline" href=""
                                            >Unsplash</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Background -->
                <div
                    id="nav-menu-bg"
                    class="absolute left-0 top-0 h-screen w-screen bg-primary"
                ></div>
            </div>
        </div>
    </Transition>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationLink from '~/components/NavigationLink.vue';

export default Vue.extend({
    name: 'NavigationMenuComponent',
    components: {
        NavigationLink,
    },
    data() {
        return {
            anime: {} as any,
        };
    },
    mounted() {
        this.anime = (this as any).$anime;

        this.animateCloseButton();
        this.animateNavLinks();
        this.animateSocialMedia();
        this.animateNavBg(false);

        // Disable Scrolling
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.onscroll = () => {
            window.scroll(scrollX, scrollY);
        };
    },
    methods: {
        onLeave(_el: HTMLElement, done: Function) {
            this.$emit('closeBurgerMenu');

            // Enable Scrolling
            window.onscroll = () => {};

            this.animateSocialMediaReverse();
            this.animateNavBg(true).finished.then(() => {
                done();
            });
            this.animateNavLinksReverse();
        },
        animateCloseButton() {
            const element = document.querySelector('#close-button');
            const svgGroup = element?.childNodes[0];

            const animeOptions = {
                easing: 'easeInOutQuad',
                duration: 700,
            };

            const tl = this.anime.timeline(animeOptions);

            // Line 1
            tl.add(
                {
                    targets: svgGroup?.childNodes[0],
                    rotate: [45, 0],
                },
                0,
            )
                // Line 2
                .add(
                    {
                        targets: svgGroup?.childNodes[2],
                        rotate: [-45, 0],
                    },
                    0,
                );
        },
        animateNavLinks() {
            const linkContainer = document.querySelectorAll(
                '#navigationLinkContainer a',
            );

            const tl = this.anime.timeline({
                targets: linkContainer,
                easing: 'easeInOutQuad',
                duration: 700,
            });
            tl.add(
                {
                    targets: linkContainer,
                    delay: this.anime.stagger(50),
                    translateX: [70, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 700,
                },
                150,
            );
        },
        animateNavLinksReverse() {
            const linkContainer = document.querySelectorAll(
                '#navigationLinkContainer a',
            );

            const tl = this.anime.timeline({
                targets: linkContainer,
                easing: 'easeInOutQuad',
                duration: 700,
                direction: 'reverse',
            });
            tl.add(
                {
                    targets: linkContainer,
                    delay: this.anime.stagger(50),
                    translateX: [120, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration: 700,
                },
                150,
            );
        },
        animateSocialMedia() {
            const smContainer = document.querySelectorAll('#sm-container *');

            const tl = this.anime.timeline({
                targets: smContainer,
                easing: 'easeInOutQuad',
            });

            tl.add(
                {
                    targets: smContainer,
                    delay: this.anime.stagger(50),
                    translateX: [50, 0],
                    opacity: [0, 1],
                    duration: 450,
                },
                150,
            );
        },
        animateSocialMediaReverse() {
            const smContainer = document.querySelectorAll('#sm-container *');

            const tl = this.anime.timeline({
                targets: smContainer,
                easing: 'easeInOutQuad',
                direction: 'reverse',
            });

            tl.add(
                {
                    targets: smContainer,
                    delay: this.anime.stagger(50),
                    translateX: [50, 0],
                    opacity: [0, 1],
                    duration: 450,
                },
                150,
            );
        },
        animateNavBg(reverse: boolean) {
            const bg = document.querySelector('#nav-menu-bg');

            const tl = this.anime.timeline({
                targets: bg,
                easing: 'easeOutQuad',
                duration: 750,
            });

            if (reverse) {
                tl.add(
                    {
                        targets: bg,
                        translateX: [0, '100%'],
                        easing: 'easeInOutQuad',
                        duration: 750,
                        // direction: 'reverse',
                    },
                    500,
                );
            } else {
                tl.add({
                    targets: bg,
                    translateX: ['100%', 0],
                    duration: 750,
                    direction: 'normal',
                });
            }

            return tl;
        },
    },
});
</script>
