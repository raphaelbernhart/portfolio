<template>
    <div class="grid grid-cols-5">
        <div class="col-span-3 flex items-center">
            <div>
                <div>
                    <h2
                        ref="title"
                        class="font-display text-4xl sm:text-6xl max-w-xl no-ligature"
                    >
                        {{ title }}
                    </h2>
                </div>
                <div>
                    <h3
                        ref="year"
                        class="italic font-light text-2xl flex items-center gap-x-3 mt-4"
                    >
                        {{ from }}
                        <span class="w-16 h-[1px] bg-text inline-block"></span>
                        {{ to }}
                    </h3>
                </div>
            </div>
        </div>
        <div
            ref="imagesWrapper"
            class="hidden sm:flex col-span-2 flex-row flex-wrap"
        >
            <div
                v-for="(image, imageIndex) in images.slice(0, 4)"
                :key="image"
                :class="{
                    'mt-24': imageIndex === 0,
                    'mt-0': imageIndex === 1,
                    '-mt-24':
                        imageIndex !== 0 &&
                        imageIndex !== 1 &&
                        imageIndex % 2 === 1,
                }"
                class="w-1/2 overflow-hidden"
            >
                <img
                    class="object-cover"
                    :src="require(`@/assets/images/profile/${image}`)"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ProfileCareerComponent',
    props: {
        index: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        from: {
            validator: (d: any) => {
                if (typeof d === 'number' || typeof d === 'string') return true;
                else return false;
            },
            required: true,
        },
        to: {
            validator: (d: any) => {
                if (typeof d === 'number' || typeof d === 'string') return true;
                else return false;
            },
            required: true,
        },
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            scrollOffset: null as any,
        };
    },
    mounted() {
        this.animateTxt();

        if (window.innerWidth < 450) this.scrollOffset = '150';
        else this.scrollOffset = '500';
    },
    methods: {
        animateTxt() {
            const anime = (this as any).$anime;
            const imagesWrapper: HTMLElement = this.$refs
                .imagesWrapper as HTMLElement;

            const images: Array<ChildNode> = [];

            imagesWrapper.childNodes.forEach((iWrapper) => {
                images.push(iWrapper.childNodes[0]);
            });

            const animation = anime.timeline({
                easing: 'easeInOutQuad',
                duration: 1250,
                autoplay: false,
            });

            animation.add({
                targets: [this.$refs.title, this.$refs.year],
                translateX: [-75, 0],
                opacity: [0, 1],
                delay(_el: any, i: number) {
                    return i * 75;
                },
            });

            // Images Animation
            animation.add(
                {
                    targets: images,
                    delay(_el: any, i: number) {
                        return i * 225;
                    },
                    translateX: [-75, 0],
                    opacity: [0, 1],
                },
                '-=1000',
            );

            animation.play();
        },
    },
});
</script>
