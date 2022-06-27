<template>
    <main class="bg-primary text-primary">
        <section
            class="p-12 lg:p-40 h-screen w-screen flex flex-col justify-between"
        >
            <h1
                ref="headTitle"
                class="md:pt-12 text-primary text-7xl xs:text-8xl lg:text-9xl font-display max-w-2xl break-words"
            >
                An Honest Application
            </h1>
            <div
                class="flex flex-col gap-y-8 sm:flex-row sm:gap-y-0 justify-between items-center"
            >
                <div
                    data-scroll
                    data-scroll-speed="2"
                    data-scroll-position="top"
                    class="hidden sm:block"
                >
                    <a
                        class="text-xl sm:text-3xl font-light tracking-widest hover:text-gray-400 transition-colors"
                        href="mailto:mail@raphaelbernhart.at"
                        >mail@raphaelbernhart.at
                    </a>
                </div>
                <div class="flex gap-x-24">
                    <!-- Dribbble -->
                    <a
                        data-scroll
                        data-scroll-speed="2"
                        data-scroll-position="top"
                        class="hover:text-gray-400 transition-colors"
                        href="https://dribbble.com/raphaelbernhart"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <g id="dribbble" transform="translate(-1 -1)">
                                <circle
                                    id="Ellipse_1"
                                    data-name="Ellipse 1"
                                    cx="15"
                                    cy="15"
                                    r="15"
                                    transform="translate(2 2)"
                                    fill="none"
                                    class="stroke-current"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                                <path
                                    id="Pfad_1"
                                    data-name="Pfad 1"
                                    d="M11.8,2.75c6.611,9.433,9.107,14.736,12.148,27.72M27.786,6.411c-5.628,6.8-13.525,8.854-25.536,9.151m29.5,2.972c-5.295-1.455-10.03-1.283-13.525,0-3.9,1.439-7.579,4.474-11.255,9.887"
                                    transform="translate(0 0)"
                                    fill="none"
                                    class="stroke-current"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </g>
                        </svg>
                    </a>
                    <!-- Vimeo -->
                    <a
                        data-scroll
                        data-scroll-speed="2.6"
                        data-scroll-position="top"
                        class="hover:text-gray-400 transition-colors"
                        href="https://vimeo.com/raphaelbernhart"
                        target="_blank"
                    >
                        <svg
                            id="Gruppe_13"
                            data-name="Gruppe 13"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="34.424"
                            height="30"
                            viewBox="0 0 34.424 30"
                        >
                            <defs>
                                <clipPath id="clip-path">
                                    <rect
                                        id="Rechteck_5"
                                        data-name="Rechteck 5"
                                        width="34.424"
                                        height="30"
                                        fill="none"
                                        stroke="#fff"
                                        stroke-width="2"
                                    />
                                </clipPath>
                            </defs>
                            <g
                                id="Gruppe_12"
                                data-name="Gruppe 12"
                                clip-path="url(#clip-path)"
                            >
                                <path
                                    id="Pfad_3"
                                    data-name="Pfad 3"
                                    d="M39.967,10.921c-1.349,9.1-7.774,16.5-14.8,22.007-3.568,3.159-7.427-.206-8.459-3.957-1.579-4.946-3.023-9.938-4.826-14.809-.638-1.9-3-.1-4.013.574L6.515,12.949C8.874,10.393,16.653,1.81,19.752,6.807c1.593,2.813,1.573,6.144,2.329,9.216.591,2.4,1,4.957,2.283,7.1,1.21,1.944,5.071-5.195,5.5-6.208,1.554-3.486-.591-6.147-4.181-4.041a9.6,9.6,0,0,1,8.08-7.77C37.624,4.426,40.312,7.06,39.967,10.921Z"
                                    transform="translate(-5.982 -4.591)"
                                    fill="none"
                                    class="stroke-current"
                                    stroke-miterlimit="10"
                                    stroke-width="2"
                                />
                            </g>
                        </svg>
                    </a>
                    <!-- Github -->
                    <a
                        data-scroll
                        data-scroll-speed="1.6"
                        data-scroll-position="top"
                        class="hover:text-gray-400 transition-colors"
                        href="https://github.com/raphaelbernhart"
                        target="_blank"
                        ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32.213"
                            height="34.387"
                            viewBox="0 0 32.213 34.387"
                        >
                            <g id="github" transform="translate(-0.787 0.065)">
                                <path
                                    id="Pfad_2"
                                    data-name="Pfad 2"
                                    d="M12.769,28.707C5.077,31.014,5.077,24.861,2,24.091m21.538,9.231V27.368a5.185,5.185,0,0,0-1.446-4.015C26.923,22.814,32,20.984,32,12.584a8.368,8.368,0,0,0-2.307-5.768,7.8,7.8,0,0,0-.14-5.8S27.738.476,23.538,3.291a20.585,20.585,0,0,0-10.769,0C8.569.476,6.754,1.014,6.754,1.014a7.8,7.8,0,0,0-.138,5.8A8.369,8.369,0,0,0,4.308,12.63c0,8.338,5.077,10.169,9.908,10.769a5.185,5.185,0,0,0-1.446,3.969v5.954"
                                    transform="translate(0 0)"
                                    fill="none"
                                    class="stroke-current"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
        <section class="container md:h-[45vh] my-36 sm:my-24">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <h2
                    data-scroll
                    data-scroll-speed="2.8"
                    data-scroll-delay="1.4"
                    class="text-7xl font-display leading-[1] md:leading-[1.1]"
                >
                    <span
                        class="md:before:block md:before:absolute before:-inset-1 before:bg-hover2 before:h-11 before:w-[97%] before:transform before:translate-x-7 before:translate-y-10 relative inline-block"
                    >
                        <span class="relative">Sehr geehrte</span> </span
                    ><br />
                    <span
                        class="md:ml-8 md:before:block md:before:absolute before:-inset-1 before:bg-hover2 before:h-11 before:w-[97%] before:transform before:translate-x-7 before:translate-y-10 relative inline-block"
                    >
                        <span class="relative">Frau Schoner</span>
                    </span>
                </h2>
                <div
                    class="text-white grid grid-cols-1 mt-[24%] max-w-3xl leading-[1.9] gap-x-14 gap-y-6 sm:grid-cols-2 sm:gap-y-0 sm:-ml-24"
                >
                    <ParagraphComponent
                        data-scroll
                        data-scroll-speed="1.4"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo sit, quia magnam beatae minima mollitia, aspernatur
                        aliquam necessitatibus perferendis dolorum quasi ab
                        adipisci facilis iure, totam explicabo quibusdam maxime
                        omnis veritatis."
                    />
                    <ParagraphComponent
                        data-scroll
                        data-scroll-speed="1.4"
                        text="                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea blanditiis suscipit explicabo numquam modi dolorum,
                        cum maiores, aliquam molestiae eum ducimus dolore
                        similique debitis iusto."
                    />
                </div>
            </div>
        </section>
        <section class="container mt-36 sm:my-24 pb-40">
            <div
                class="grid grid-cols-1 sm:grid-cols-7 gap-y-24 gap-x-32 sm:gap-y-0"
            >
                <div class="sm:col-span-3" data-scroll data-scroll-speed="2.4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-16">
                        <div>
                            <ApplicationsHeadline
                                text="Un<br/>cover<br/>letter"
                                size="lg"
                                align="right"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-24">
                        <ParagraphComponent
                            text="Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit sed nostrum praesentium sapiente ab! Id
                            praesentium illo veritatis earum! Sunt, unde
                            perferendis ipsum molestias maxime quia magni
                            repellat, non distinctio provident, rem illum beatae
                            sint cumque. Sequi quasi iure mollitia.<br/><br/>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam atque possimus quod. Animi minima, corrupti porro debitis maiores libero ipsam? Accusantium quod maxime labore doloremque? Voluptate animi tempore earum."
                        />
                        <ParagraphComponent
                            text="Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit sed nostrum praesentium sapiente ab! Id
                            praesentium illo veritatis earum! Sunt, unde
                            perferendis ipsum molestias maxime quia."
                        />
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <div
                        class="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12 sm:gap-y-0 md:mt-52"
                    >
                        <div
                            class="md:pt-24 flex flex-col gap-y-16"
                            data-scroll
                            data-scroll-speed="1.5"
                        >
                            <div class="flex flex-col gap-y-12">
                                <ApplicationsHeadline
                                    text="Who I am"
                                    size="md"
                                    align="left"
                                />
                                <ParagraphComponent
                                    text="Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Fugit sed nostrum praesentium sapiente ab! Id
                                        praesentium illo veritatis earum! Sunt, unde
                                        perferendis ipsum molestias maxime quia.<br/><br/>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit."
                                />
                            </div>
                            <div class="flex flex-col gap-y-12">
                                <ApplicationsHeadline
                                    text="Things I love"
                                    size="md"
                                    align="left"
                                />
                                <ParagraphComponent
                                    text="
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    "
                                />
                            </div>
                        </div>
                        <div
                            class="flex flex-col gap-y-16"
                            data-scroll
                            data-scroll-speed="2"
                        >
                            <div class="flex flex-col gap-y-12">
                                <ApplicationsHeadline
                                    text="Education"
                                    size="md"
                                    align="left"
                                />
                                <ParagraphComponent
                                    text="
                                    <b>2008/2012</b><br/>
                                    Volksschule Brixen im Thale<br/>
                                    <br/>
                                    <b>2008/2012</b><br/>
                                    Volksschule Brixen im Thale<br/>
                                    <br/>
                                    <b>2008/2012</b><br/>
                                    Volksschule Brixen im Thale<br/>
                                    <br/>
                                    <b>2008/2012</b><br/>
                                    Volksschule Brixen im Thale<br/>
                                    "
                                />
                            </div>
                            <div class="flex flex-col gap-y-12">
                                <ApplicationsHeadline
                                    text="skills"
                                    size="md"
                                    align="left"
                                />
                                <ParagraphComponent
                                    text="
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    "
                                />
                            </div>
                        </div>
                        <div
                            class="md:pt-32 flex flex-col gap-y-16"
                            data-scroll
                            data-scroll-speed="1.2"
                        >
                            <div class="flex flex-col gap-y-12">
                                <ApplicationsHeadline
                                    text="Work Experiences"
                                    size="md"
                                    align="left"
                                />
                                <div class="flex flex-col gap-y-4">
                                    <ApplicationListWorks
                                        company="Bigfoot Design Saalfelden"
                                        from="08/2017"
                                        to="09/2018"
                                    />
                                    <ApplicationListWorks
                                        company="Factor Innsbruck"
                                        from="11/2019"
                                        to="03/2020"
                                    />
                                    <ApplicationListWorks
                                        company="Creative Freelancer"
                                        from="01/2021"
                                        to="-"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-col gap-y-12">
                                <ApplicationsHeadline
                                    text="future goals"
                                    size="md"
                                    align="left"
                                />
                                <ParagraphComponent
                                    text="
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    skiing<br/>
                                    noch mehr skiing<br/>
                                    anderes<br/>
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Link -->
            <div class="w-full flex flex-row-reverse mt-24 sm:mt-12">
                <Link
                    text="To the About Page"
                    link="https://raphaelbernhart.at/profile"
                />
            </div>
        </section>
        <section class="pb-24 sm:pb-8 sm:mt-24">
            <ApplicationLink
                title="My Works"
                description="Find my work here"
                page="works"
                background="https://content.raphaelbernhart.at/assets/39211516-d3aa-4932-b4f0-b4f611dc25a8"
            />
            <ApplicationLink
                title="Contact"
                description="Let's stay in touch"
                page="contact"
                background="https://content.raphaelbernhart.at/assets/7f81bdb4-0288-44da-a88f-fe34025be585"
                align="r"
            />
        </section>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import ApplicationsHeadline from '@/components/applications/Headline.vue';
import ParagraphComponent from '~/components/global/ParagraphComponent.vue';
import ApplicationListWorks from '@/components/applications/ListWorks.vue';
import ApplicationLink from '@/components/applications/Links.vue';
import { randomFloat } from '@/services/Helpers';

export default Vue.extend({
    name: 'ProjectPage',
    components: {
        ApplicationsHeadline,
        ParagraphComponent,
        ApplicationListWorks,
        ApplicationLink,
    },
    layout: 'application',
    // asyncData({ $axios, params, error }) {
    //     return '';
    // },
    data() {
        return {
            anime: {} as any,
        };
    },
    head() {
        return {
            title: 'Application',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Test',
                },
            ],
        };
    },
    mounted() {
        this.$nuxt.$emit('change-transition-title', 'Colorphyl Bewerbung');

        // Animate Head
        this.anime = (this as any).$anime;
        this.animateHead();

        // Update Locomotive Scroll
        setTimeout(() => {
            this.$nuxt.$emit('update-locomotive');
        }, 2500);
    },
    methods: {
        // title() {
        //     const id = (this as any).id;
        //     if (id) return id.replace('-', ' ');
        //     return '';
        // },
        animateHead() {
            const ref = this.$refs.headTitle;

            const animation = this.anime.timeline({
                duration: 1250,
                easing: 'easeInOutQuad',
            });

            if (window.innerWidth > 480) {
                const letters: any = this.$letterize({
                    targets: ref,
                    className: 'inline-block',
                });

                // Add Lerp Effect
                letters.listAll.forEach((e: HTMLElement) => {
                    const randomNumber = randomFloat(2, 4, 1);

                    const html = e.innerHTML;
                    e.innerHTML = `<span>${html}</span>`;

                    // Add the effect
                    e.children[0].classList.add('inline-block');
                    e.children[0].setAttribute('data-scroll', '');
                    e.children[0].setAttribute(
                        'data-scroll-speed',
                        randomNumber.toString(),
                    );
                    e.children[0].setAttribute('data-scroll-position', 'top');
                    // (e.children[0] as HTMLElement).style.marginTop =
                    //     randomNumber.toString();
                    // e.children[0].setAttribute(
                    //     'data-scroll-delay',
                    //     randomFloat(0, 1.6, 1).toString(),
                    // );
                });

                // animation.add(
                //     {
                //         targets: letters.listAll,
                //         translateY: [70, 0],
                //         opacity: [0, 1],
                //         easing: 'easeOutQuad',
                //         duration: 1000,
                //         delay(_el: any, i: number) {
                //             return i * 120;
                //         },
                //     },
                //     1000,
                // );
            }
        },
    },
});
</script>
