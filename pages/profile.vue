<template>
    <div class="min-h-screen">
        <div class="relative h-screen text-primary">
            <div class="bg-primary w-screen h-[80vh]">
                <div class="container h-full">
                    <div
                        class="absolute left-8 bottom-24 transform rotate-6 inline-block z-10"
                    >
                        <!-- Mark -->
                        <MarkComponent
                            data-scroll
                            data-scroll-speed="1.8"
                            class="hidden md:block z-10"
                            :text="$t('profile.head.marking')"
                            :delay="750"
                        />
                    </div>
                    <div
                        data-scroll
                        data-scroll-speed="1.5"
                        class="absolute left-0 bottom-0 max-w-3xl z-0"
                    >
                        <img
                            class="w-full h-full"
                            src="@/assets/images/portrait.jpg"
                            alt=""
                        />
                    </div>
                    <div class="grid grid-cols-2 w-full h-full">
                        <div class="hidden md:block"></div>
                        <div
                            class="flex items-center col-span-2 md:pt-56 md:col-span-1"
                        >
                            <div ref="headText">
                                <h1
                                    data-scroll
                                    data-scroll-speed="1.4"
                                    data-scroll-delay="0.1"
                                    class="font-display text-7xl md:text-9xl"
                                >
                                    {{ $t('profile.head.lead') }}
                                </h1>
                                <div>
                                    <p
                                        data-scroll
                                        data-scroll-speed="1.4"
                                        data-scroll-delay="0.6"
                                        class="text-lg leading-loose max-w-2xl mt-6"
                                    >
                                        {{ $t('profile.head.paragraph') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container my-36">
            <div class="grid-cols-5 gap-36 space-y-28 lg:grid lg:space-y-0">
                <div class="col-span-2 relative z-10">
                    <div class="relative">
                        <h3
                            data-scroll
                            data-scroll-speed="1.3"
                            data-scroll-class="FADE_UP"
                            class="italic font-bold text-xl text-text mb-4"
                        >
                            {{ $t('profile.section-1.headline') }}
                        </h3>
                        <ParagraphComponent
                            data-scroll
                            data-scroll-speed="1.6"
                            data-scroll-class="FADE_UP"
                            class="max-w-[450px]"
                            :text="$t('profile.section-1.paragraph')"
                        />
                        <div
                            data-scroll
                            data-scroll-speed="1"
                            data-scroll-class="FADE_UP"
                            class="absolute right-3/4 -bottom-8 h-[1px] w-screen bg-primary lg:right-0"
                        ></div>
                    </div>
                </div>
                <div class="col-span-3 relative h-80">
                    <MapComponent
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-delay="0.2"
                        class="absolute -top-28 sm:-top-40 left-12 md:left-0 md:w-full w-[622px] h-[330px] sm:w-[830px] sm:h-[440px]"
                    />
                </div>
            </div>
        </section>

        <!-- <div
            data-scroll
            data-scroll-call="FADE_UP"
            class="fade-up bg-red-400 h-96 w-96"
        ></div> -->

        <section class="container my-48">
            <h2
                ref="section2txt"
                data-scroll
                data-scroll-call="PROFILE_SECTION2_ANIMATE_PARAGRAPH"
                class="font-display text-5xl sm:text-6xl md:text-7xl max-w-5xl leading-tight break-words"
            >
                {{ $t('profile.section-2.paragraph') }}
            </h2>
        </section>

        <section class="container relative my-56 space-y-20 sm:-space-y-24">
            <ProfileCareerComponent
                :index="0"
                title="Lehre Grafik/Mediendesign"
                :from="2017"
                :to="2018"
                :images="['about-lehre-1.jpg', 'about-lehre-2.jpg']"
            />
            <ProfileCareerComponent
                :index="1"
                title="Werbe Design Akademie Innsbruck"
                :from="2018"
                :to="2020"
                :images="[
                    'about-1.jpg',
                    'about-2.jpg',
                    'about-3.jpg',
                    'about-4.jpg',
                ]"
            />
            <ProfileCareerComponent
                :index="2"
                title="Factor Partners Innsbruck"
                :from="2019"
                :to="2020"
                :images="['about-factor-1.jpg', 'about-factor-2.jpg']"
            />
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { sanitize } from '@/services/Helpers';

import MarkComponent from '@/components/widgets/MarkComponent.vue';
import MapComponent from '@/components/widgets/MapComponent.vue';
import ProfileCareerComponent from '@/components/widgets/ProfileCareerComponent.vue';

export default Vue.extend({
    name: 'ProfilePage',
    components: {
        MapComponent,
        ProfileCareerComponent,
        MarkComponent,
    },
    head() {
        return {
            title: 'Profile',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: (this as any).$t('profile.meta.description'),
                },
            ],
        };
    },
    mounted() {
        this.animateHead();
        this.animateSection2Txt();
    },
    methods: {
        sanitize,
        animateHead() {
            const anime = (this as any).$anime;
            const ref: HTMLElement = this.$refs.headText as HTMLElement;

            const letters: any = this.$letterize({
                targets: ref.childNodes[0],
                className: 'inline-block',
            });

            const tl = anime.timeline({
                easing: 'easeInOutQuad',
                duration: 1250,
                delay(_el: any, i: number) {
                    return i * 35;
                },
            });

            tl.add(
                {
                    targets: letters.listAll,
                    translateY: [75, 0],
                    opacity: [0, 1],
                },
                500,
            );

            tl.add(
                {
                    targets: ref.childNodes[2],
                    translateY: [50, 0],
                    opacity: [0, 1],
                },
                '-=1250',
            );
        },
        animateSection2Txt() {
            const anime = (this as any).$anime;
            const ref: any = this.$refs.section2txt;

            let letters: any;

            if (window.innerWidth > 480) {
                letters = this.$letterize({
                    targets: ref,
                    className: 'inline-block',
                });
            }

            const animation = anime({
                targets: window.innerWidth > 480 ? letters.listAll : ref,
                easing: 'easeInOutQuad',
                duration: 750,
                translateY: [75, 0],
                opacity: [0, 1],
                delay(_el: any, i: number) {
                    return i * 35;
                },
                autoplay: false,
            });

            setTimeout(() => {
                this.$locomotive.on('call', (e: any) => {
                    if (e === 'PROFILE_SECTION2_ANIMATE_PARAGRAPH')
                        animation.play();
                });
            }, 100);
        },
    },
});
</script>
