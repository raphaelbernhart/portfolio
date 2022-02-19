<template>
    <div :class="{ 'justify-end': isEven }" class="flex w-full">
        <div
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
                    class="h-full w-full object-cover"
                    :src="image"
                    alt=""
                />
                <img
                    v-else
                    class="h-full w-full object-cover"
                    src="~/assets/images/placeholder.jpg"
                    alt=""
                />
            </div>
            <div
                :class="{
                    'sm:order-1 sm:-mr-48': isEven,
                    'sm:order-2 sm:-ml-48': !isEven,
                }"
                class="relative mb-24 mt-10 sm:mt-0"
            >
                <div class="relative z-10 flex max-w-lg flex-col gap-y-8">
                    <h3 class="max-w-md font-display text-7xl md:text-8xl">
                        {{ name }}
                    </h3>
                    <ParagraphComponent :text="text" />
                    <div class="flex gap-x-1">
                        <span
                            v-for="(category, iCat) in categories"
                            :key="category"
                            class="inline-block text-sm font-bold"
                        >
                            {{ category
                            }}<span v-if="categories.length !== iCat + 1"
                                >,
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
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
