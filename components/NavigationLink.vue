<template>
    <nuxt-link :to="localePath(route)" class="relative cursor-pointer">
        <div id="text-container" class="relative">
            <span id="text-stroke-sibling" class="relative z-30 text-7xl lg:text-8xl xl:text-9xl font-display text-primary inline-block hover:text-transparent duration-500">{{ text }}</span>
            <span class="absolute z-40 pointer-events-none left-0 top-0 text-7xl lg:text-8xl xl:text-9xl font-display text-transparent inline-block text-stroke transition-colors">{{ text }}</span>
            <span id="animation-text" class="absolute z-20 pointer-events-none left-0 top-0 text-7xl lg:text-8xl xl:text-9xl font-display text-transparent block bg-clip-text bg-gradient-to-br from-green-800 to-indigo-900 bg-cover">{{ text }}</span>
        </div>
    </nuxt-link>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'NavigationLinkComponent',
        props: {
            text: {
                type: String,
                required: true
            },
            route: {
                type: String,
                required: true
            }
        }
    })
</script>

<style>
    .text-stroke {
        opacity: 0;
        transition: 400ms;
        transition-property: opacity;
        -webkit-text-stroke: 1px white;
    }

    #text-stroke-sibling:hover+.text-stroke {
        opacity: 1;
        transition: 400ms;
    }

    #animation-text {
        animation: none;
    }

    #text-container:hover #animation-text {
        animation-iteration-count: infinite;
        animation: animate 1s;
    }

    @keyframes animate {

        0% {
            -webkit-clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%);
            clip-path: polygon(0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%, 0 100%);
            animation-delay: 0;
            animation-timing-function: ease-in;
        }

        50% {
            -webkit-clip-path: polygon(0 100%, 0 22%, 21% 14%, 38% 17%, 54% 21%, 66% 35%, 71% 51%, 75% 69%, 84% 81%, 100% 100%);
            clip-path: polygon(0 100%, 0 22%, 21% 14%, 38% 17%, 54% 21%, 66% 35%, 71% 51%, 75% 69%, 84% 81%, 100% 100%);
            animation-delay: 0;
            animation-timing-function: linear;
        }

        100% {
            -webkit-clip-path: polygon(0 100%, 0 0, 26% 0, 53% 0, 80% 0, 100% 0, 100% 19%, 100% 46%, 100% 67%, 100% 100%);
            clip-path: polygon(0 100%, 0 0, 26% 0, 53% 0, 80% 0, 100% 0, 100% 19%, 100% 46%, 100% 67%, 100% 100%);
            animation-delay: 0;
            animation-timing-function: ease-out;
        }
    }
</style>