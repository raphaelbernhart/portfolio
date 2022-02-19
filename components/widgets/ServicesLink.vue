<template>
    <div>
        <div class="relative inline-block overflow-hidden text-text">
            <div
                class="relative z-10 cursor-pointer"
                @mouseenter="animate($event)"
            >
                <h3
                    class="no-ligature underline-offset-3 font-display text-6xl underline sm:text-7xl md:text-8xl xl:no-underline md:text-border-3"
                >
                    {{ text }}
                </h3>
                <h3
                    class="bottom- no-ligature underline-offset-3 absolute font-display text-6xl underline sm:text-7xl md:text-8xl xl:no-underline md:text-border-3"
                >
                    {{ text }}
                </h3>
            </div>
            <div
                class="absolute bottom-2 -z-10 hidden h-1.5 w-full bg-primary xl:block"
            ></div>
            <div
                class="absolute bottom-2 -z-10 hidden h-1.5 w-full -translate-x-full transform bg-primary xl:block"
            ></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ServiceLinkWidget',
    props: {
        text: {
            type: String,
            required: true,
        },
    },
    methods: {
        animate(e: MouseEvent) {
            const anime: any = (this as any).$anime;

            const t = e.target as HTMLElement;
            // const tHeight = t.clientHeight

            // const wordTl = anime.timeline({
            //     targets: t,
            //     easing: 'easeOutQuad',
            //     duration: 500
            // });

            // wordTl.add({
            //     translateY: [0, `-${tHeight}px`]
            // })

            const underline1Tl = anime.timeline({
                targets: t.nextElementSibling,
                easing: 'easeInOutSine',
                duration: 500,
            });
            underline1Tl.add({
                // width: ['100%', '0'],
                translateX: [0, '100%'],
            });

            const underline2Tl = anime.timeline({
                targets: t.nextElementSibling?.nextElementSibling,
                easing: 'easeInOutSine',
                duration: 500,
            });
            underline2Tl.add(
                {
                    // width: ['0', '100%'],
                    translateX: ['-100%', '0'],
                },
                '+=170',
            );
        },
    },
});
</script>
