<template>
    <div class="flex gap-x-6">
        <div
            v-for="(prop, index) in filterProps"
            :key="prop"
            :class="{
                'bg-primaryColor text-text': activeFilters.includes(prop),
                'bg-light text-primary': !activeFilters.includes(prop),
            }"
            class="flex gap-x-2 py-2 px-4 text-sm rounded-md cursor-pointer"
            @click="toggleFilter(prop, index)"
        >
            {{ prop }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ProjectsFilterComponent',
    data() {
        return {
            filterProps: [
                'Branding',
                'Design',
                'Web Development',
                'Conception',
                'Video Production',
            ],
            activeFilters: [],
        };
    },
    mounted() {
        this.filterProps.forEach((p: string) =>
            this.activeFilters.push(p as never),
        );
        this.$emit('updateFilter', this.activeFilters);
    },
    methods: {
        toggleFilter(prop: never) {
            // Disable Filter
            if (this.activeFilters.includes(prop)) {
                const activeFiltersIndex = this.activeFilters.indexOf(prop);
                this.activeFilters.splice(activeFiltersIndex, 1);
                this.$emit('updateFilter', this.activeFilters);
                return;
            }

            // Enable Filter
            this.activeFilters.push(prop);

            this.$emit('updateFilter', this.activeFilters);
        },
    },
});
</script>
