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
    },
});
</script>

<template>
    <p
        :class="{
            'text-base': size === 'base',
            'text-lg leading-loose': size === 'large',
            'text-sm': size === 'small',
        }"
        class="leading-7"
        v-html="sanitize(text)"
    ></p>
</template>
