<template>
    <div
        class="flex items-center justify-between gap-x-8 text-lg leading-8 md:text-base md:leading-7"
    >
        <span class="font-bold leading-normal">{{ company }}</span>
        <div class="text-right">
            <span>{{ from }}</span>
            <div class="w-full h-[1px] bg-white my-1"></div>
            <span>{{ to }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ApplicationListWorks',
    props: {
        company: {
            type: String,
            required: true,
        },
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
    },
});
</script>
