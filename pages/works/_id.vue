<template>
    <div>
        <div class="relative h-screen w-full bg-white">
            <!-- Title -->
            <div
                class="relative h-full w-full flex px-12 md:px-0 items-end md:items-center justify-center text-white md:mix-blend-difference z-10"
            >
                <h1
                    ref="headTitle"
                    class="relative font-display text-9xl md:text-[12rem] uppercase break-all"
                >
                    Syndena
                </h1>
            </div>
            <div
                class="absolute left-0 top-0 w-screen h-screen pt-12 flex items-start justify-center text-white md:mix-blend-difference z-10"
            >
                <h4 ref="headCategories" class="text-lg uppercase">
                    Branding, Design
                </h4>
            </div>
            <!-- Background -->
            <div
                ref="headBg"
                class="absolute h-screen w-[550px] left-1/2 top-0 transform -translate-x-1/2 z-0"
            >
                <div class="relative bg-primary w-full h-[115%]">
                    <img
                        v-if="image"
                        class="w-full h-full object-cover brightness-50 md:brightness-100"
                        :src="image"
                        alt=""
                    />
                </div>
            </div>
        </div>

        <section class="relative my-48 mt-96 container px-80">
            <div class="grid grid-cols-7 gap-x-48">
                <div class="col-span-4">
                    <div class="relative inline-block">
                        <ParagraphComponent
                            class="max-w-[450px]"
                            :text="$t('home.section-1.intro')"
                        />
                        <div
                            class="absolute right-0 -bottom-8 h-[1px] w-screen bg-primary lg:right-0"
                        ></div>
                    </div>
                </div>
                <div class="col-span-3 relative inline-block">
                    <div class="flex flex-col gap-y-6">
                        <div class="flex flex-col gap-y-2">
                            <h3 class="font-bold">Services</h3>
                            <span>Conception, Branding, Design</span>
                        </div>
                        <div class="h-[1px] w-full bg-primary"></div>
                        <div class="flex flex-col gap-y-2">
                            <h3 class="font-bold">Client</h3>
                            <span>Factor Innsbruck</span>
                        </div>
                        <div class="h-[1px] w-full bg-primary"></div>
                        <div class="flex flex-col gap-y-2">
                            <h3 class="font-bold">Live Website</h3>
                            <span>syndena.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative my-48">
            <div
                class="overflow-hidden relative w-full h-[650px] z-10 flex justify-end"
                data-scroll
                data-scroll-speed="2"
            >
                <div
                    class="overflow-hidden inline-block relative w-full h-[550px] md:h-[850px]"
                >
                    <div class="w-full h-full">
                        <img
                            data-scroll
                            data-scroll-speed="1.3"
                            data-scroll-offset="-150%"
                            src="https://images.unsplash.com/photo-1556943418-0e5712249b9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                            class="md:absolute -top-36 bg-gray-600 h-full w-full object-cover brightness-75"
                        />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="grid grid-cols-12 gap-x-14">
                    <div data-scroll data-scroll-speed="1.3" class="col-span-8">
                        <div class="w-full h-full inline-block">
                            <img
                                class="w-full object-cover max-h-[650px]"
                                src="https://images.unsplash.com/photo-1592972819197-7adf482e77d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="1.3" class="col-span-4">
                        <div class="w-full inline-block">
                            <img
                                class="w-full h-full object-cover max-h-[350px]"
                                src="https://images.unsplash.com/photo-1574281583557-6cd118037a4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 my-44">
                    <div></div>
                    <div>
                        <ParagraphComponent
                            class="max-w-[550px]"
                            :text="
                                $t('home.section-1.intro') +
                                $t('home.section-1.intro')
                            "
                        />
                    </div>
                </div>
                <div v-if="video">
                    <iframe
                        :src="video"
                        width="100%"
                        height="450px"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                        title="Rebound University Project"
                    ></iframe>
                </div>
                <div class="grid grid-cols-2 px-28 my-44">
                    <div>
                        <ParagraphComponent
                            class="max-w-[550px]"
                            :text="
                                $t('home.section-1.intro') +
                                $t('home.section-1.intro')
                            "
                        />
                    </div>
                    <div>
                        <ParagraphComponent
                            class="max-w-[550px]"
                            :text="
                                $t('home.section-1.intro') +
                                $t('home.section-1.intro')
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ProjectPage',
    asyncData({ params }) {
        return { id: params.id };
    },
    data() {
        return {
            anime: {} as any,
            image: 'https://images.unsplash.com/photo-1578393098337-5594cce112da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=617&q=80',
            video: 'https://player.vimeo.com/video/523033458?h=d0a4e781e4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
        };
    },
    mounted() {
        this.anime = (this as any).$anime;
        this.animateHead();
    },
    methods: {
        animateHead() {
            const ref = this.$refs.headTitle;
            const bgRef = this.$refs.headBg as HTMLElement;
            const catRef = this.$refs.headCategories as HTMLElement;

            const animation = this.anime.timeline({
                duration: 1250,
                easing: 'easeInOutQuad',
            });

            animation.add(
                {
                    targets: bgRef.childNodes[0],
                    translateY: ['100%', 0],
                    opacity: [0, 1],
                    delay(_el: any, i: number) {
                        return i * 120;
                    },
                },
                500,
            );

            animation.add(
                {
                    targets: catRef,
                    easing: 'easeOutQuad',
                    translateY: ['100%', 0],
                    opacity: [0, 1],
                },
                1500,
            );

            if (window.innerWidth > 480) {
                const letters: any = this.$letterize({
                    targets: ref,
                    className: 'inline-block',
                });

                let lastLerp = 0;

                // Add Lerp Effect
                letters.listAll.forEach((e: HTMLElement) => {
                    const html = e.innerHTML;
                    e.innerHTML = `<span>${html}</span>`;

                    // Add the effect
                    e.children[0].classList.add('inline-block');
                    e.children[0].setAttribute('data-scroll', '');
                    e.children[0].setAttribute('data-scroll-speed', '6');
                    e.children[0].setAttribute(
                        'data-scroll-delay',
                        (1.6 - lastLerp).toFixed(1).toString(),
                    );

                    lastLerp += 0.2;
                });

                animation.add(
                    {
                        targets: letters.listAll,
                        translateY: [70, 0],
                        opacity: [0, 1],
                        easing: 'easeOutQuad',
                        duration: 1000,
                        delay(_el: any, i: number) {
                            return i * 120;
                        },
                    },
                    1000,
                );
            }

            // animation.add(
            //     {
            //         targets: ref,
            //         translateY: [250, 0],
            //         easing: 'easeOutQuad',
            //         duration: 1100,
            //     },
            //     900,
            // );
        },
    },
});
</script>
