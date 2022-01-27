<template>
    <div>
        <div class="relative inline-block overflow-hidden">
            <div class="cursor-pointer z-10 relative" @mouseenter="animate($event)">
                <h3 class="text-6xl sm:text-7xl md:text-8xl font-display no-ligature underline underline-offset-3 md:no-underline md:text-border-3">{{ text }}</h3>
                <h3 class="absolute bottom- text-6xl sm:text-7xl md:text-8xl font-display no-ligature underline underline-offset-3 md:no-underline md:text-border-3">{{ text }}</h3>
            </div>
            <div class="hidden md:block absolute bottom-2 w-full h-1.5 bg-primary -z-10"></div>
            <div class="hidden md:block absolute bottom-2 w-full h-1.5 bg-primary -z-10 transform -translate-x-full"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ServiceLinkWidget',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        animate(e: MouseEvent) {
            const anime: any = (this as any).$anime;

            const t = e.target as HTMLElement
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
            })
            underline1Tl.add({
                // width: ['100%', '0'],
                translateX: [0, '100%']
            })

            const underline2Tl = anime.timeline({
                targets: t.nextElementSibling?.nextElementSibling,
                easing: 'easeInOutSine',
                duration: 500,
            })
            underline2Tl.add({
                // width: ['0', '100%'],
                translateX: ['-100%', '0']
            }, '+=170')
        }
    }
})
</script>