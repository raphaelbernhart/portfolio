<script lang="ts">
/* eslint-disable vue/no-v-html */

import Vue from 'vue'
import { sanitize } from '@/services/Helpers'

export default Vue.extend({
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        sanitize
    }
})
</script>

<template>
    <p class="leading-7" v-html="sanitize(text)" ></p>
</template>