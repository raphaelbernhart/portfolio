<template>
    <div
        class="absolute top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden"
        style="z-index: 9000000"
    >
        <div
            ref="loadingCover"
            class="absolute top-0 bg-black left-0 w-full h-full z-40"
        ></div>
        <div
            class="absolute left-0 top-0 w-full h-full flex items-center justify-center z-50"
        >
            <div
                ref="text"
                :class="{ hidden: !showText }"
                class="text-center text-primary text-2xl font-bold uppercase"
            >
                <div class="overflow-hidden">
                    <span class="font-normal inline-block"
                        ><span class="transform -translate-y-1 inline-block"
                            >@</span
                        >raphaelbernhart</span
                    ><br />
                </div>
                <div class="overflow-hidden">
                    <span class="inline-block">{{ text }}</span>
                </div>
            </div>
        </div>
        <!--
        <div class="left-layer pointer-events-auto bg-primaryColor"></div>
        <div
            class="left-layer left-layer--2 pointer-events-auto bg-green-400"
        ></div>
        <div
            class="left-layer left-layer--3 pointer-events-auto bg-red-400"
        ></div>
        <div
            class="left-layer left-layer--4 pointer-events-auto bg-primary"
        ></div> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'TransitionComponent',
    props: {
        text: {
            type: String,
            required: false,
            default: 'Portfolio 2022',
        },
    },
    data() {
        return {
            timeline: {} as any,
            showText: false,
        };
    },
    mounted() {
        this.transitionInit();
    },
    methods: {
        transitionInit() {
            const text = this.$refs.text as HTMLElement;
            const loadingCover = this.$refs.loadingCover as HTMLElement;
            const store = this.$store;

            this.showText = true;

            const layer = document.querySelectorAll('.left-layer');

            layer.forEach((item) => {
                item.classList.toggle('active');
            });

            this.timeline = (this as any).$anime.timeline({
                easing: 'easeInOutQuad',
            });

            this.timeline.add({
                targets: [
                    text.childNodes[0].childNodes[0],
                    text.childNodes[2].childNodes[0],
                ],
                translateY: [30, 0],
                // opacity: [0, 1],
                duration: 1250,
                delay: (this as any).$anime.stagger(300),
            });

            this.timeline.add(
                {
                    targets: loadingCover,
                    easing: 'easeInOutQuad',
                    translateY: [0, '-100%'],
                    duration: 1000,
                    delay: 1000,
                },
                '+=200',
            );

            this.timeline.add(
                {
                    targets: [
                        text.childNodes[0].childNodes[0],
                        text.childNodes[2].childNodes[0],
                    ],
                    translateY: [0, -30],
                    // opacity: [0, 1],
                    duration: 1000,
                    delay: (this as any).$anime.stagger(300),
                    begin() {
                        setTimeout(() => {
                            store.commit('transitions/finishInitTransition');
                        }, 250);
                    },
                },
                '-=1300',
            );
        },
    },
});
</script>
