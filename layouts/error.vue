<template>
    <div class="h-screen flex items-center bg-primary">
        <div class="container">
            <h1 class="text-8xl font-display text-white">
                <span v-if="error.statusCode === 404">{{
                    $t('error.404')
                }}</span>
                <span v-else>{{ $t('error.500') }}</span>
            </h1>
            <NuxtLink
                to="/"
                class="text-white underline text-lg pt-12 relative block"
            >
                Back to Home
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ErrorPage',
    // eslint-disable-next-line vue/require-prop-types
    props: ['error'],
});
</script>
