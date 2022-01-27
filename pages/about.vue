<template>
    <div>
        <p>{{ $t('about.test') }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'AboutPage',
        head() {
            return {
                title: 'About'
            }
        }
    })
</script>