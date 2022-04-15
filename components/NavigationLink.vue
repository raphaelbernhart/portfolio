<template>
    <nuxt-link :to="localePath(route)" class="relative cursor-pointer">
        <div id="text-container" class="relative">
            <span
                id="text-stroke-sibling"
                class="relative z-30 inline-block font-display text-7xl text-primary duration-500 hover:text-transparent xs:text-7xl xl:text-9xl no-ligature"
                >{{ text }}</span
            >
            <span
                class="text-stroke pointer-events-none absolute left-0 top-0 z-40 inline-block font-display text-7xl text-transparent transition-colors xs:text-7xl xl:text-9xl no-ligature"
                >{{ text }}</span
            >
            <span
                id="animation-text"
                class="pointer-events-none absolute left-0 top-0 z-20 block bg-gradient-to-br from-green-800 to-indigo-900 bg-cover bg-clip-text font-display text-7xl xs:text-7xl text-transparent xl:text-9xl no-ligature"
                >{{ text }}</span
            >
        </div>
    </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'NavigationLinkComponent',
    props: {
        text: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            required: true,
        },
    },
});
</script>

<style>
.text-stroke {
    opacity: 0;
    transition: 400ms;
    transition-property: opacity;
    -webkit-text-stroke: 1px white;
}

#text-stroke-sibling:hover + .text-stroke {
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
        -webkit-clip-path: polygon(
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%
        );
        clip-path: polygon(
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%,
            0 100%
        );
        animation-delay: 0;
        animation-timing-function: ease-in;
    }

    50% {
        -webkit-clip-path: polygon(
            0 100%,
            0 22%,
            21% 14%,
            38% 17%,
            54% 21%,
            66% 35%,
            71% 51%,
            75% 69%,
            84% 81%,
            100% 100%
        );
        clip-path: polygon(
            0 100%,
            0 22%,
            21% 14%,
            38% 17%,
            54% 21%,
            66% 35%,
            71% 51%,
            75% 69%,
            84% 81%,
            100% 100%
        );
        animation-delay: 0;
        animation-timing-function: linear;
    }

    100% {
        -webkit-clip-path: polygon(
            0 100%,
            0 0,
            26% 0,
            53% 0,
            80% 0,
            100% 0,
            100% 19%,
            100% 46%,
            100% 67%,
            100% 100%
        );
        clip-path: polygon(
            0 100%,
            0 0,
            26% 0,
            53% 0,
            80% 0,
            100% 0,
            100% 19%,
            100% 46%,
            100% 67%,
            100% 100%
        );
        animation-delay: 0;
        animation-timing-function: ease-out;
    }
}
</style>
