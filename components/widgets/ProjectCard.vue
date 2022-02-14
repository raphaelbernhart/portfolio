<template>
    <div
        class="relative inline-block max-h-[650px] cursor-pointer w-full"
        @mouseenter="enterElement($event)"
        @mouseleave="leaveElement($event)"
    >
        <div
            class="text-right inline-block absolute bottom-16 left-0 z-20 text-primary"
            data-scroll
            data-scroll-speed="4"
        >
            <h2 ref="text" class="text-9xl font-display">{{ name }}</h2>
            <h3 ref="categories" class="text-xl uppercase">
                <span v-for="(category, iCat) in categories" :key="category">
                    {{ category
                    }}<span v-if="categories.length !== iCat + 1">, </span>
                </span>
            </h3>
        </div>
        <div
            class="overflow-hidden relative w-full h-[650px] z-10 flex justify-end"
            data-scroll
            data-scroll-speed="2"
        >
            <div class="overflow-hidden inline-block h-full relative w-[88%]">
                <div class="w-full h-full">
                    <img
                        data-scroll
                        data-scroll-speed="1.3"
                        data-scroll-offset="-150%"
                        :src="image"
                        class="absolute -top-36 bg-gray-600 h-[135%] w-full object-cover brightness-75"
                    />
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
        name: {
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
            anime: {} as any,
            textAnimation: {} as any,
            // isEven: false,
            // animationTarget: '' as any,
        };
    },
    mounted() {
        // this.isEven = this.isEvenFunc(this.index + 1);
        this.anime = (this as any).$anime;

        this.animateText();
    },
    methods: {
        enterElement(e: Event) {
            this.animate(1.05, 800, e);
            // Animate Text
            this.animateTextOnHover([0, -35]);
        },
        leaveElement(e: Event) {
            this.animate(1.0, 600, e);
            // Animate Text
            this.animateTextOnHover([0, 35]);
        },
        animateTextOnHover(position: Array<number>) {
            const textElement = this.$refs.text as HTMLElement;

            const letters: any = this.$letterize({
                targets: textElement,
                className: 'inline-block',
            });

            const targets = letters.listAll;

            // this.anime.remove(targets);
            this.anime({
                targets,
                easing: 'easeInOutQuad',
                duration: 750,
                translateY: position,
                delay(_el: any, i: number) {
                    return i * 35;
                },
            });
        },
        animateText() {
            const textElement = this.$refs.text as HTMLElement;
            const categories = this.$refs.categories as HTMLElement;

            const letters: any = this.$letterize({
                targets: textElement,
                className: 'inline-block',
            });

            letters.listAll.push(categories);
            const targets = letters.listAll;

            if (!this.isInViewport(textElement)) return;

            this.anime({
                targets,
                easing: 'easeInOutQuad',
                duration: 1250,
                translateY: [65, 0],
                opacity: [0, 1],
                delay(_el: any, i: number) {
                    return i * 35;
                },
            });
        },
        animate(scale: number, duration: number, event: Event) {
            const anime: any = (this as any).$anime;
            const t = event.target as HTMLElement;

            const image = t.childNodes[2].childNodes[0].childNodes[0];

            // Animate Image
            anime.remove(image);
            anime({
                targets: image,
                scale,
                duration,
                easing: 'easeInOutSine',
            });
        },
        isInViewport(element: HTMLElement) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
            );
        },
    },
});
</script>
