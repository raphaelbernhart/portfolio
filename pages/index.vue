<script lang="ts">
/* eslint-disable vue/no-v-html */

import Vue from 'vue';
import MarkComponent from '@/components/widgets/MarkComponent.vue';
import ServiceLink from '@/components/widgets/ServicesLink.vue';
import ProjectFeatured from '~/components/widgets/ProjectFeatured.vue';
import { sanitize } from '~/services/Helpers';

export default Vue.extend({
    name: 'IndexPage',
    components: {
        ServiceLink,
        ProjectFeatured,
        MarkComponent,
    },
    data() {
        return {
            initAnimationFinished: false,
            initAnimation: {} as any,
            projects: [] as any,
        };
    },
    head() {
        return {
            title: 'Home',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: (this as any).$t('home.meta.description'),
                },
            ],
        };
    },
    watch: {
        '$store.state.transitions.initTransitionFinished'(newValue: boolean) {
            if (newValue === true) {
                this.initAnimation.play();
                this.animateHeadImage();
            }
        },
    },
    mounted() {
        const letters: any = this.$letterize({
            targets: '#head-letterize',
            className: 'inline-block',
        });

        const anime: any = (this as any).$anime;

        this.initAnimation = anime({
            targets: letters.listAll,
            easing: 'easeInOutQuad',
            duration: 1500,
            translateY: [125, 0],
            opacity: [0, 1],
            delay(_el: any, i: number) {
                return i * 35;
            },
            autoplay: false,
            begin: () => {
                setTimeout(() => {
                    this.initAnimationFinished = true;
                }, 1000);
            },
        });

        if (this.$store.state.transitions.initTransitionFinished) {
            this.initAnimation.play();
            this.animateHeadImage();
        }

        this.fetchFeaturedProjects();
    },
    methods: {
        sanitize,
        animateHeadImage() {
            const htmlElement: HTMLElement = this.$refs.headImage;

            // Add overflow-hidden class to parent
            htmlElement.classList.add('overflow-hidden');

            // Fade Up Animation
            (this as any).$anime({
                targets: htmlElement.childNodes[0],
                easing: 'easeInOutQuad',
                translateY: [125, 0],
                opacity: [0, 1],
                duration: 1000,
            });
        },
        async fetchFeaturedProjects() {
            try {
                const res = await this.$axios.get(
                    `${process.env.CONTENT_API_URL}items/rb_portfolio_projects?limit=2`,
                );

                this.projects = res.data.data;
                this.projects.forEach((project: Record<string, any>) => {
                    project.hidden = false;
                });
            } catch (err: any) {}
        },
    },
});
</script>

<template>
    <div>
        <div class="h-screen w-screen bg-primary dark:bg-primaryColor">
            <div
                class="container relative flex h-full items-end pb-6 md:items-center"
            >
                <h1
                    id="head-letterize"
                    class="z-10 flex max-w-4xl flex-col font-display text-7xl uppercase text-primary dark:text-text md:text-8xl lg:text-9xl"
                >
                    <span class="flex flex-wrap gap-x-8 overflow-hidden">
                        <span>Creative </span>
                        <span>and</span>
                    </span>
                    <span class="flex flex-wrap gap-x-8 overflow-hidden">
                        <span>dev </span>
                        <span>from </span>
                    </span>
                    <span class="overflow-hidden">Austria</span>
                </h1>
                <div
                    ref="headImage"
                    data-scroll
                    class="absolute left-16 bottom-24 inline-block md:left-32 md:bottom-60 headImage"
                >
                    <img
                        class="pointer-events-none object-cover brightness-50"
                        src="@/assets/images/head.webp"
                        alt=""
                    />
                </div>
                <!-- Mark -->
                <MarkComponent
                    v-if="initAnimationFinished"
                    class="absolute md:-right-20 xl:right-96 md:bottom-10 xl:bottom-32 hidden md:block"
                    :text="$t('home.head.marking')"
                />
            </div>
        </div>

        <section class="container my-36">
            <div class="grid-cols-5 gap-36 space-y-28 lg:grid lg:space-y-0">
                <div class="col-span-2">
                    <div class="relative">
                        <ParagraphComponent
                            data-scroll
                            data-scroll-class="FADE_UP"
                            class="max-w-[450px]"
                            :text="$t('home.section-1.intro')"
                        />
                        <div
                            data-scroll
                            data-scroll-class="FADE_UP"
                            class="absolute right-3/4 -bottom-8 h-[1px] w-screen bg-primary lg:right-0"
                        ></div>
                    </div>
                </div>
                <div
                    data-scroll
                    data-scroll-class="FADE_UP"
                    class="col-span-3 flex flex-col gap-y-3"
                >
                    <h4 class="text-5xl font-thin italic md:text-6xl">
                        I focus on
                    </h4>

                    <ServiceLink text="Development" filter="Web Development" />
                    <ServiceLink
                        text="Video Production"
                        filter="Video Production"
                    />
                    <ServiceLink text="Design" filter="Design,Branding" />
                </div>
            </div>
        </section>

        <section class="container relative my-56">
            <h3
                class="text-featured hidden xl:absolute -left-24 top-0 -rotate-90 transform text-7xl font-thin lowercase italic"
            >
                featured projects
            </h3>
            <div
                class="flex flex-col gap-y-32 sm:gap-y-0 md:gap-y-24 xl:-space-y-24"
            >
                <ProjectFeatured
                    v-for="(project, index) in projects"
                    :id="project.title"
                    :key="project.title"
                    :index="index"
                    :name="project.title"
                    :categories="project.categories"
                    :text="project.introTxt"
                    :image="`https://content.raphaelbernhart.at/assets/${project.image}?width=1400&quality=90`"
                />
            </div>
        </section>

        <section class="relative mt-36 w-screen bg-primary py-24 text-primary">
            <div class="container">
                <div class="grid grid-cols-12 gap-y-16">
                    <div class="col-span-12 md:col-span-5">
                        <h3
                            class="no-ligature pr-28 font-display text-7xl"
                            v-html="sanitize($t('home.section-3.headline'))"
                        ></h3>
                    </div>
                    <div
                        class="col-span-12 md:col-span-7 flex h-full flex-row flex-wrap sm:flex-nowrap items-center justify-between gap-12"
                    >
                        <div class="flex flex-col gap-y-4">
                            <svg
                                class="h-12 w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                width="40.967"
                                height="40.967"
                                viewBox="0 0 40.967 40.967"
                            >
                                <g
                                    id="globe-outline"
                                    transform="translate(-47.5 -47.5)"
                                >
                                    <path
                                        id="Pfad_29"
                                        data-name="Pfad 29"
                                        d="M67.984,48A19.984,19.984,0,1,0,87.967,67.984,19.984,19.984,0,0,0,67.984,48Z"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-miterlimit="10"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_30"
                                        data-name="Pfad 30"
                                        d="M154.155,48c-5.579,0-10.825,8.947-10.825,19.984s5.246,19.984,10.825,19.984,10.825-8.947,10.825-19.984S159.734,48,154.155,48Z"
                                        transform="translate(-86.171)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-miterlimit="10"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_31"
                                        data-name="Pfad 31"
                                        d="M117.33,117.33a23.4,23.4,0,0,0,26.645,0"
                                        transform="translate(-62.669 -62.669)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_32"
                                        data-name="Pfad 32"
                                        d="M143.975,355.494a23.4,23.4,0,0,0-26.645,0"
                                        transform="translate(-62.669 -274.188)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_33"
                                        data-name="Pfad 33"
                                        d="M256,48V87.967"
                                        transform="translate(-188.016)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-miterlimit="10"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_34"
                                        data-name="Pfad 34"
                                        d="M87.967,256H48"
                                        transform="translate(0 -188.016)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-miterlimit="10"
                                        stroke-width="1"
                                    />
                                </g>
                            </svg>
                            <h4 class="text-2xl italic">
                                {{ $t('home.section-3.services.1.title') }}
                            </h4>
                            <p class="text-base max-w-[250px] sm:max-w-none">
                                {{ $t('home.section-3.services.1.text') }}
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-y-4 max-w-[250px] sm:max-w-none"
                        >
                            <svg
                                class="h-12 w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                width="41.497"
                                height="24.141"
                                viewBox="0 0 41.497 24.141"
                            >
                                <g
                                    id="videocam-outline"
                                    transform="translate(-31.5 -127.5)"
                                >
                                    <path
                                        id="Pfad_35"
                                        data-name="Pfad 35"
                                        d="M368.614,158.55l7.477,5.263a1.446,1.446,0,0,0,2.034-1.322V145.066a1.446,1.446,0,0,0-2.034-1.322l-7.477,5.263A1.446,1.446,0,0,0,368,150.19v7.177a1.446,1.446,0,0,0,.614,1.182Z"
                                        transform="translate(-305.627 -14.208)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_36"
                                        data-name="Pfad 36"
                                        d="M53.333,151.141H36.7a4.714,4.714,0,0,1-4.7-4.7V132.7a4.714,4.714,0,0,1,4.7-4.7H53.377a4.672,4.672,0,0,1,4.657,4.657v13.783A4.714,4.714,0,0,1,53.333,151.141Z"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-miterlimit="10"
                                        stroke-width="1"
                                    />
                                </g>
                            </svg>
                            <h4 class="text-2xl italic">
                                {{ $t('home.section-3.services.2.title') }}
                            </h4>
                            <p class="text-base">
                                {{ $t('home.section-3.services.2.text') }}
                            </p>
                        </div>
                        <div
                            class="flex flex-col gap-y-4 max-w-[250px] sm:max-w-none"
                        >
                            <svg
                                class="h-12 w-12"
                                xmlns="http://www.w3.org/2000/svg"
                                width="41.53"
                                height="29.991"
                                viewBox="0 0 41.53 29.991"
                            >
                                <g
                                    id="text-outline"
                                    transform="translate(-31.356 -95)"
                                >
                                    <path
                                        id="Pfad_37"
                                        data-name="Pfad 37"
                                        d="M32,124.347,42.818,95.5l10.818,28.847"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_38"
                                        data-name="Pfad 38"
                                        d="M88.063,303.5H74"
                                        transform="translate(-38.214 -189.249)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_39"
                                        data-name="Pfad 39"
                                        d="M326,195.827a7.2,7.2,0,0,1,6.671-4.327,6.91,6.91,0,0,1,7.212,7.212v12.981"
                                        transform="translate(-267.497 -87.346)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                    />
                                    <path
                                        id="Pfad_40"
                                        data-name="Pfad 40"
                                        d="M320,301.179a5.1,5.1,0,0,0,5.409,5.229c4.868,0,9.015-2.434,9.015-9.556V295.5a77.87,77.87,0,0,0-8.294.451C323.176,296.3,320,297.664,320,301.179Z"
                                        transform="translate(-262.037 -181.97)"
                                        fill="none"
                                        stroke="#f5f1e6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                    />
                                </g>
                            </svg>

                            <h4 class="text-2xl italic">
                                {{ $t('home.section-3.services.3.title') }}
                            </h4>
                            <p class="text-base">
                                {{ $t('home.section-3.services.3.text') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative h-[360px] sm:h-[460px] w-screen text-primary">
            <div
                data-scroll
                data-scroll-class="FADE_UP"
                data-scroll-animation-delay="250"
                class="container relative z-10 flex h-full items-center"
            >
                <h3 class="font-display text-7xl">
                    {{ $t('home.section-4.headline') }}
                </h3>
            </div>
            <img
                src="~/assets/images/ready-for-takeoff.webp"
                alt=""
                class="absolute left-0 top-0 -z-10 h-full w-screen object-cover brightness-75"
            />
        </section>
    </div>
</template>

<style class="scoped">
.featured-gap {
    row-gap: -80px;
}

.text-featured {
    transform-origin: 50% 418%;
}
.headImage img {
    opacity: 0;
}
</style>
