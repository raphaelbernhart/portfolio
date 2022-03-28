<template>
    <div
        :class="{
            'border-primary bg-primary': light,
            'border-text bg-white': !light,
            'max-w-[250px] py-5 px-12': size === 'large',
        }"
        class="btn relative inline-block max-w-[200px] cursor-pointer overflow-hidden border-[1px] py-4 px-8 transition-colors"
    >
        <div class="flex items-center gap-x-2">
            <div v-if="type == 'icon'">
                <!-- Icon -->
                <slot></slot>
            </div>
            <span
                :class="{ 'text-lg': size === 'large' }"
                class="z-10 text-white mix-blend-difference"
            >
                <!-- Text -->
                {{ text }}
            </span>
        </div>
        <div
            :class="{ 'bg-primaryColor': light, 'bg-primary': !light }"
            class="btn-bg absolute left-0 top-0 -z-10 h-full w-0 transition-all duration-500"
        ></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ButtonComponent',
    props: {
        type: {
            type: String,
            required: false,
            default: 'text',
        },
        text: {
            type: String,
            required: true,
        },
        light: {
            type: Boolean,
            required: false,
            default: false,
        },
        size: {
            type: String,
            required: false,
            default: 'normal',
            validator: (v) => {
                const acceptedValues = ['normal', 'large'];

                return acceptedValues.includes(v);
            },
        },
    },
});
</script>

<style>
.btn:hover .btn-bg {
    width: 100%;
}
</style>
