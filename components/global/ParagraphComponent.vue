<script lang="ts">
/* eslint-disable vue/no-v-html */

import Vue from 'vue';
import { sanitize } from '@/services/Helpers';

export default Vue.extend({
    props: {
        text: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: false,
            default: 'base',
            validator: (type: string) => {
                const types = ['base', 'large', 'small'];
                if (types.includes(type)) return true;
                else return false;
            },
        },
    },
    methods: {
        sanitize,
        getText() {
            if (typeof this.text === 'string') return sanitize(this.text);
        },
    },
});
</script>

<template>
    <p
        :class="{
            'text-lg leading-8 md:text-base md:leading-7': size === 'base',
            'text-xl leading-loose md:text-lg': size === 'large',
            'text-base md:text-sm': size === 'small',
        }"
        v-html="getText()"
    ></p>
</template>
