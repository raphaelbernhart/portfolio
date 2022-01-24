<template>
    <router-link :to="{ name: page }" :class="{ 'font-normal': isActive }" class="relative cursor-pointer hover:text-gray-300 transition-colors">
        {{ text }}
        <div :class="{ 'scale-x-100': isActive, 'scale-x-0': !isActive }" class="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-white transition-transform"></div>
    </router-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'NavigationLinkItem',
    props: {
        text: {
            type: String,
            required: true
        },
        page: {
            type: String,
            required: true
        }
    },
    computed: {
        isActive() {
            if (this.page === this.$route.name) return true
            else return false
        }
    }
})
</script>
