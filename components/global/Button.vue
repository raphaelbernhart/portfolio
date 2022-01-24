<template>
    <div
    :class="{ 'border-primary bg-primary': light, 'border-text bg-white': !light, 'py-5 px-12 max-w-[250px]': size === 'large' }"
    class="btn relative inline-block py-4 px-8 max-w-[200px] cursor-pointer transition-colors overflow-hidden border-[1px]">
        <div class="flex gap-x-2 items-center">
            <div v-if="type== 'icon'">
                <!-- Icon -->
                <slot></slot>
            </div>
            <span
                :class="{'text-lg': size === 'large' }"
                class="text-white mix-blend-difference z-10"
            >
                <!-- Text -->
                {{ text }}
            </span>
        </div>
        <div
        :class="{ 'bg-primaryColor': light, 'bg-primary': !light }"
        class="btn-bg absolute left-0 top-0 w-0 h-full -z-10 transition-all duration-500"
        ></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ButtonComponent',
    props: {
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        text: {
            type: String,
            required: true
        },
        light: {
            type: Boolean,
            required: false,
            default: false
        },
        size: {
            type: String,
            required: false,
            default: 'normal',
            validator: (v) => {
                const acceptedValues = ['normal', 'large'];

                return acceptedValues.includes(v);
            }
        }
    }
})
</script>

<style>
    .btn:hover .btn-bg {
        width: 100%;
    }
</style>