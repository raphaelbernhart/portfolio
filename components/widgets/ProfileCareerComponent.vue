<template>
    <div
        data-scroll
        :data-scroll-call="`PROFILE_SECTION3_ANIMATE_${index}`"
        data-scroll-offset="500"
        class="grid grid-cols-5"
    >
        <div class="col-span-3 flex items-center">
            <div>
                <div data-scroll data-scroll-speed="3" data-scroll-delay="0.6">
                    <h2 ref="title" class="font-display text-6xl max-w-xl">
                        {{ title }}
                    </h2>
                </div>
                <div data-scroll data-scroll-speed="3" data-scroll-delay="0.2">
                    <h3
                        ref="year"
                        class="italic font-light text-2xl flex items-center gap-x-3 mt-4"
                    >
                        {{ from }}
                        <span class="w-16 h-[1px] bg-text inline-block"></span
                        >{{ to }}
                    </h3>
                </div>
            </div>
        </div>
        <div ref="imagesWrapper" class="col-span-2 flex flex-row flex-wrap">
            <div
                v-for="(image, index) in images.slice(0, 4)"
                :key="image"
                :class="{
                    'mt-24': index === 0,
                    'mt-0': index === 1,
                    '-mt-24': index !== 0 && index !== 1 && index % 2 === 1,
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
    mounted() {
        this.animateTxt();
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

            setTimeout(() => {
                this.$locomotive.on('call', (e: any) => {
                    if (e === `PROFILE_SECTION3_ANIMATE_${this.index}`)
                        animation.play();
                });
            }, 100);
        },
    },
});
</script>