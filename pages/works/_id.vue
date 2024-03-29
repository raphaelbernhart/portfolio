<template>
    <div v-if="project">
        <div class="relative w-full h-screen bg-white">
            <!-- Title -->
            <div
                class="relative z-10 flex items-end justify-center w-full h-full px-12 text-white md:px-0 md:items-center md:mix-blend-difference"
            >
                <h1
                    ref="headTitle"
                    class="relative font-display text-8xl xs:text-9xl md:text-[12rem] uppercase"
                    style="
                        -webkit-hyphens: auto;
                        -ms-hyphens: auto;
                        hyphens: auto;
                    "
                >
                    {{ title() }}
                </h1>
            </div>
            <div
                class="absolute top-0 left-0 z-10 flex items-start justify-center w-screen h-screen pt-12 text-white md:mix-blend-difference"
            >
                <h4 ref="headCategories" class="text-lg uppercase">
                    <span
                        v-for="(category, iCat) in project.categories"
                        :key="category"
                    >
                        {{ category
                        }}<span v-if="project.categories.length !== iCat + 1"
                            >,
                        </span>
                    </span>
                </h4>
            </div>
            <!-- Background -->
            <div
                ref="headBg"
                class="absolute h-screen w-[550px] left-1/2 top-0 transform -translate-x-1/2 z-0"
            >
                <div class="relative bg-primary w-full h-[115%]">
                    <!-- <img
                        v-if="image"
                        class="object-cover w-full h-full brightness-50 md:brightness-100"
                        :src="image"
                        alt=""
                    /> -->
                </div>
            </div>
        </div>

        <section class="container relative my-48 mt-56 md:mt-96 md:px-80">
            <div class="grid-cols-7 md:grid gap-x-48">
                <div class="col-span-4">
                    <div
                        data-scroll
                        data-scroll-class="FADE_UP"
                        class="relative inline-block"
                    >
                        <ParagraphComponent
                            class="max-w-[450px]"
                            :text="project.introTxt"
                        />
                        <div
                            class="absolute right-0 -bottom-8 h-[1px] w-screen bg-primary lg:right-0"
                        ></div>
                    </div>
                </div>
                <div
                    data-scroll
                    data-scroll-class="FADE_UP"
                    class="relative inline-block col-span-3 mt-36 md:mt-0"
                >
                    <div class="flex flex-col gap-y-6">
                        <div class="flex flex-col gap-y-2">
                            <h3 class="font-bold">Services</h3>
                            <span
                                ><span
                                    v-for="(
                                        category, iCat
                                    ) in project.categories"
                                    :key="category"
                                >
                                    {{ category
                                    }}<span
                                        v-if="
                                            project.categories.length !==
                                            iCat + 1
                                        "
                                        >,
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div class="h-[1px] w-full bg-primary"></div>
                        <div
                            v-if="project.client"
                            class="flex flex-col gap-y-2"
                        >
                            <h3 class="font-bold">Client</h3>
                            <span>{{ project.client[0] }}</span>
                        </div>
                        <div
                            v-if="project.liveSite"
                            class="h-[1px] w-full bg-primary"
                        ></div>
                        <div
                            v-if="project.liveSite"
                            class="flex flex-col gap-y-2"
                        >
                            <h3 class="font-bold">Live Website</h3>
                            <a
                                :href="project.liveSite"
                                target="_blank"
                                rel="noopener noreferrer"
                                >{{
                                    project.liveSite.replace(
                                        /(^\w+:|^)\/\//,
                                        '',
                                    )
                                }}</a
                            >
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
                            :src="image"
                            class="object-cover w-full h-full bg-gray-600 md:absolute -top-36"
                        />
                    </div>
                </div>
            </div>
            <div class="container">
                <div
                    v-if="project.imageCarousel[0]"
                    class="grid grid-cols-1 gap-0 md:grid-cols-12 md:gap-x-14"
                >
                    <div data-scroll data-scroll-speed="1.3" class="col-span-8">
                        <div class="inline-block w-full h-full">
                            <img
                                class="w-full object-cover h-full max-h-[650px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imageCarousel[0].directus_files_id}?width=960&height=620&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                    </div>
                    <div
                        data-scroll
                        data-scroll-speed="1.3"
                        data-scroll-delay="0.1"
                        class="grid col-span-4 mt-8 md:mt-0 gap-y-8 md:gap-y-14"
                    >
                        <div
                            v-if="project.imageCarousel[1]"
                            class="inline-block w-full"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[300px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imageCarousel[1].directus_files_id}?width=460&height=300&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                        <div
                            v-if="project.imageCarousel[2]"
                            class="inline-block w-full"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[350px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imageCarousel[2].directus_files_id}?width=460&height=300&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <!-- Section TEXT1 -->
                <section class="my-48 space-y-16 md:ml-12">
                    <div>
                        <h2 v-if="project.heading1" class="text-3xl font-bold">
                            {{ project.heading1 }}
                        </h2>
                        <ParagraphComponent
                            v-if="project.text1"
                            class="max-w-3xl mt-8"
                            :text="project.text1"
                        />
                    </div>
                    <div
                        class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-y-0"
                    >
                        <div
                            v-if="project.imagesTxt1[0]"
                            data-scroll
                            data-scroll-speed="1.3"
                            class="inline-block w-full md:col-span-2"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[600px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imagesTxt1[0].directus_files_id}?width=1536&height=600&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                        <div
                            v-if="project.imagesTxt1[1]"
                            data-scroll
                            data-scroll-speed="1.3"
                            data-scroll-delay="0.2"
                            class="inline-block w-full"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[400px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imagesTxt1[1].directus_files_id}?width=750&height=400&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                        <div
                            v-if="project.imagesTxt1[2]"
                            data-scroll
                            data-scroll-speed="1.3"
                            data-scroll-delay="0.1"
                            class="inline-block w-full"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[400px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imagesTxt1[2].directus_files_id}?width=750&height=400&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <!-- Section TEXT2 -->
                <section class="my-48 space-y-16 md:ml-12">
                    <div>
                        <h2 v-if="project.heading2" class="text-3xl font-bold">
                            {{ project.heading2 }}
                        </h2>
                        <ParagraphComponent
                            v-if="project.text2"
                            class="max-w-3xl mt-8"
                            :text="project.text2"
                        />
                    </div>
                    <div
                        class="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-y-0"
                    >
                        <div
                            v-if="project.imagesTxt2[0]"
                            data-scroll
                            data-scroll-speed="1.3"
                            class="inline-block w-full md:col-span-2"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[600px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imagesTxt2[0].directus_files_id}?width=1536&height=600&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                        <div
                            v-if="project.imagesTxt2[1]"
                            data-scroll
                            data-scroll-speed="1.3"
                            data-scroll-delay="0.2"
                            class="inline-block w-full"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[400px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imagesTxt2[1].directus_files_id}?width=750&height=400&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                        <div
                            v-if="project.imagesTxt2[2]"
                            data-scroll
                            data-scroll-speed="1.3"
                            data-scroll-delay="0.1"
                            class="inline-block w-full"
                        >
                            <img
                                class="w-full h-full object-cover max-h-[400px] rounded-lg"
                                :src="`https://content.raphaelbernhart.at/assets/${project.imagesTxt2[2].directus_files_id}?width=750&height=400&quality=90&format=webp`"
                                alt=""
                            />
                        </div>
                    </div>
                </section>

                <!-- <div
                    v-if="project.text1"
                    data-scroll
                    data-scroll-class="FADE_UP"
                    class="grid-cols-2 my-24 md:grid md:my-44"
                >
                    <div></div>
                    <div>
                        <ParagraphComponent
                            class="max-w-[550px]"
                            :text="project.text1"
                        />
                    </div>
                </div> -->
                <!-- TODO VIDEO -->
                <!-- <div v-if="video">
                    <iframe
                        :src="video"
                        width="100%"
                        height="450px"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen
                        title="Rebound University Project"
                    ></iframe>
                </div> -->
                <!-- <div class="grid-cols-2 my-24 md:grid md:px-28 md:my-44">
                    <div
                        v-if="project.text2"
                        data-scroll
                        data-scroll-class="FADE_UP"
                    >
                        <ParagraphComponent
                            class="max-w-[550px]"
                            :text="project.text2"
                        />
                    </div>
                    <div
                        v-if="project.text3"
                        data-scroll
                        data-scroll-class="FADE_UP"
                        class="mt-14 md:mt-0"
                    >
                        <ParagraphComponent
                            class="max-w-[550px]"
                            :text="project.text3"
                        />
                    </div>
                </div> -->
            </div>
        </section>
    </div>
    <div v-else>TEST</div>
</template>

<script lang="ts">
import Vue from 'vue';
import config from '@/nuxt.config';

export default Vue.extend({
    name: 'ProjectPage',
    async asyncData({ $axios, params, error, $sentry }) {
        const id = params.id;

        if (id.length <= 1) {
            const project = false;
            return { project };
        }

        // Get Project
        let project;
        try {
            const res = await $axios.get(
                `${process.env.CONTENT_API_URL}items/rb_portfolio_projects/${id}?fields=*,imageCarousel.*,imagesTxt1.*,imagesTxt2.*,imagesTxt3.*`,
            );

            project = res.data.data;
        } catch (err) {
            $sentry.captureException(new Error('Fetch project data error'));
            error({ statusCode: 404, message: 'Project not found' });
        }

        if (!config.dev) {
            if (!project) {
                error({ statusCode: 404, message: 'Project not found' });
                return { id, project };
            }

            if (project?.status === 'draft' || project?.status === 'archived')
                error({ statusCode: 404, message: 'Project not found' });
        }

        return { id, project };
    },
    data() {
        return {
            id: '',
            anime: {} as any,
            image: '',
            video: '',
        };
    },
    head() {
        return {
            title:
                (this as any).title().charAt(0).toUpperCase() +
                (this as any).title().slice(1),
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: (this as any).project.introTxt,
                },
            ],
        };
    },
    mounted() {
        this.anime = (this as any).$anime;
        this.animateHead();

        // Set Image
        this.image = `https://content.raphaelbernhart.at/assets/${
            (this as any).project.image
        }?quality=90&format=webp`;

        // Update Locomotive Scroll
        setTimeout(() => {
            this.$nuxt.$emit('update-locomotive');
        }, 2500);
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

                const initialLerpDelay: number = 1.6;
                const lerpDelayAdditionPerLetter: number = parseFloat(
                    (initialLerpDelay / letters.listAll.length).toFixed(1),
                );

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

                    lastLerp += lerpDelayAdditionPerLetter;
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
        title() {
            const id = (this as any).id;
            if (id) return id.replace('-', ' ');
            return '';
        },
    },
});
</script>
