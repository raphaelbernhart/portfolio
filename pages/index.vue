<template>
    <div>
        <div class="h-screen w-screen bg-primary dark:bg-primaryColor">
            <div class="container relative flex pb-6 items-end md:items-center h-full">
                <h1 id="test-letterize" class="font-display text-7xl md:text-8xl lg:text-9xl uppercase max-w-4xl text-primary dark:text-text z-10 flex flex-col">
                    <span class="flex gap-x-8 flex-wrap overflow-hidden">
                        <span>Creative </span>
                        <span>and</span>
                    </span>
                    <span class="flex gap-x-8 flex-wrap overflow-hidden">
                        <span>dev </span>
                        <span>from </span>
                    </span>
                    <span class="overflow-hidden">Austria</span>
                </h1>
                <img class="absolute left-16 bottom-24 md:left-32 md:bottom-60 h-[290px] brightness-50 pointer-events-none object-cover" src="@/assets/images/head.webp" alt="">
                <!-- Mark -->
                <MarkComponent class="hidden md:block absolute right-96 bottom-32" :text="$t('home.head.marking')" />
            </div>
        </div>
        <section class="container my-36 md:my-24">
            <div class="space-y-28 lg:space-y-0 lg:grid grid-cols-5 gap-36">
                <div class="col-span-2">
                    <div class="relative">
                        <ParagraphComponent class="max-w-[450px]" :text="$t('home.section-1.intro')"/>
                        <div class="absolute h-[1px] w-screen right-3/4 lg:right-0 -bottom-8 bg-primary"></div>
                    </div>
                </div>
                <div class="col-span-3 flex flex-col gap-y-3">
                    <h4 class="text-5xl md:text-6xl font-thin italic">I focus on</h4>
                    <ServiceLink text="Development" />
                    <ServiceLink text="Video Production" />
                    <ServiceLink text="Design" />
                </div>
            </div>
        </section>
        <section class="container my-36 md:my-24 relative">
            <h3 class="absolute -left-24 top-0 text-7xl font-thin italic lowercase transform -rotate-90 text-featured">featured projects</h3>
            <div class="flex flex-col -space-y-24">
                <ProjectFeatured
                    id="u87asdf" :index="0" name="Syndena" 
                    text="I work with brands, businesses, and agencies of all different shapes and sizes from all around the world to create web designs that leave a lasting impression. I'm always looking to get my teeth stuck into new and exciting projects, so let's collaborate."
                    image=""
                    :categories="['Branding', 'Design']"
                />
                <ProjectFeatured
                    id="ua4sdf" :index="1" name="The Campers" 
                    text="I work with brands, businesses, and agencies of all different shapes and sizes from all around the world to create web designs that leave a lasting impression. I'm always looking to get my teeth stuck into new and exciting projects, so let's collaborate."
                    image=""
                    :categories="['Branding', 'Design']"
                />
            </div>
        </section>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ServiceLink from '@/components/widgets/ServicesLink.vue'
    import ProjectFeatured from '~/components/widgets/ProjectFeatured.vue'

    export default Vue.extend({
        name: 'IndexPage',
        components: {
            ServiceLink,
            ProjectFeatured
        },
        head() {
            return {
                title: 'Home'
            }
        },
        mounted() {
            const letters: any = this.$letterize({ targets: '#test-letterize', className: 'inline-block' })

            const anime: any = (this as any).$anime;

            const animation = anime({
                targets: letters.listAll,
                easing: 'easeInOutQuad',
                duration: 1500,
                translateY: [125, 0],
                opacity: [0, 1],
                delay(_el: any, i: number) { return i * 35 },
                autoplay: false
            })

            window.addEventListener('load', () => {
                animation.play()
            })
        }
    })
</script>

<style class="scoped">
    .featured-gap {
        row-gap: -80px;
    }
    .text-featured {
        transform-origin: 50% 418%;
    }
</style>