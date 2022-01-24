<template>
    <h3 class="text-8xl font-display cursor-pointer underline underline-offset-4 hover:no-underline transition-all duration-1000">{{ text }}</h3>
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
    }
})
</script>