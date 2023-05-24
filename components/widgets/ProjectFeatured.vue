<template>
    <div
        :class="{ 'justify-end': isEven }"
        class="flex w-full"
        data-scroll
        data-scroll-class="FADE_UP"
    >
        <nuxt-link
            :to="localePath(`/works/${id}`)"
            class="duration-400 relative flex cursor-pointer flex-col sm:flex-row sm:items-end text-text transition-colors hover:text-hover"
            @mouseenter="enterElement($event)"
            @mouseleave="leaveElement($event)"
        >
            <div
                :class="{ 'sm:order-2': isEven, 'sm:order-1': !isEven }"
                class="h-80 sm:h-52 w-full overflow-hidden md:h-[740px] md:w-[512px]"
            >
                <img
                    v-if="image"
                    class="object-cover w-full h-full md:opacity-70"
                    :src="image"
                    alt=""
                />
                <img
                    v-else
                    class="object-cover w-full h-full md:opacity-70"
                    src="~/assets/images/placeholder.jpg"
                    alt=""
                />
            </div>
            <div
                :class="{
                    'sm:order-1 sm:-mr-48': isEven,
                    'sm:order-2 sm:-ml-48': !isEven,
                }"
                class="relative sm:mb-24 mt-10 sm:mt-0"
            >
                <div
                    class="relative z-10 flex flex-col max-w-lg gap-y-4 md:gap-y-8"
                >
                    <h3
                        data-scroll
                        data-scroll-speed="1.2"
                        data-scroll-delay="1.6"
                        class="max-w-md uppercase break-words font-display text-7xl md:text-8xl"
                    >
                        {{ title }}
                    </h3>
                    <ParagraphComponent
                        data-scroll
                        data-scroll-speed="1.2"
                        data-scroll-delay="0.8"
                        :text="getText"
                    />
                    <div
                        data-scroll
                        data-scroll-speed="1.2"
                        data-scroll-delay="0.2"
                        class="flex flex-wrap gap-x-1"
                    >
                        <span
                            v-for="(category, iCat) in categories"
                            :key="category"
                            class="inline-block text-sm font-bold whitespace-nowrap"
                        >
                            {{ category }}
                            <span v-if="categories.length !== iCat + 1">,</span>
                        </span>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ProjectFeaturedWidget',
    props: {
        id: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
            default: '',
        },
        categories: {
            type: Array,
            required: false,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            isEven: false,
            animationTarget: '' as any,
        };
    },
    computed: {
        title() {
            return this.name.replaceAll('-', ' ');
        },
        getText() {
            const limit = 165;
            if (this.text.length > limit)
                return this.text.substring(0, limit) + '...';
            else return this.text;
        },
    },
    created() {
        this.isEven = this.isEvenFunc(this.index + 1);
    },
    methods: {
        isEvenFunc(number: number) {
            if (number % 2 === 0) {
                return true;
            } else {
                return false;
            }
        },
        animate(scale: number, duration: number, event: Event) {
            const anime: any = (this as any).$anime;
            const t = event.target as HTMLElement;
            const image = t.childNodes[0].childNodes[0];
            const imageContainer = t.childNodes[0];

            // Animate Image Container
            anime.remove(imageContainer);
            anime({
                targets: imageContainer,
                scale: scale === 1.0 ? scale : 0.97,
                duration,
                easing: 'easeInOutSine',
            });

            // Animate Image
            anime.remove(image);
            anime({
                targets: image,
                scale,
                duration,
                easing: 'easeInOutSine',
            });
        },
        enterElement(e: Event) {
            this.animate(1.1, 800, e);
        },
        leaveElement(e: Event) {
            this.animate(1.0, 600, e);
        },
        // animate(e: MouseEvent) {
        //     const anime: any = (this as any).$anime;
        //     const t = e.target as HTMLElement

        //     let rev;

        //     if (e.type === 'mouseenter') rev = false
        //     else rev = true

        //     this.animateImage(t, anime, rev)
        // }
    },
});
</script>
