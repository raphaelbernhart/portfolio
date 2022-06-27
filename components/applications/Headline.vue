<template>
    <div
        :class="{
            'text-left': align === 'left',
            'text-right': align === 'right',
            'pb-4': size === 'lg',
            'pb-2': size === 'md',
        }"
        class="relative text-primary max-w-[280px]"
    >
        <!-- Text -->
        <h3
            lang="en"
            :class="{ 'text-6xl': size === 'lg', 'text-4xl': size === 'md' }"
            class="font-bold lowercase"
            v-html="sanitize(text)"
        />
        <!-- Underline -->
        <span
            :class="{ '-bottom-4': size === 'lg', '-bottom-2': size === 'md' }"
            class="absolute left-0 w-full h-0.5 bg-primaryColor"
        ></span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { sanitize } from '@/services/Helpers';

export default Vue.extend({
    name: 'ApplicationsHeadline',
    props: {
        text: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: false,
            default: 'md',
        },
        // eslint-disable-next-line vue/prop-name-casing
        align: {
            type: String,
            required: false,
            default: 'right',
        },
    },
    methods: {
        sanitize,
    },
});
</script>

<style lang="css" scoped>
h3 {
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
}
</style>
