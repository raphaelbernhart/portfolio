<template>
    <div>
        <p class="text-base">{{ $t('about.test') }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'ProfilePage',
        head() {
            return {
                title: 'About'
            }
        }
    })
</script>