<template>
    <div class="flex flex-wrap gap-y-4 pt-8 md:pt-0 gap-x-6 items-center">
        <span class="text-primary mr-6">Filter:</span>
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
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },
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
    watch: {
        // Wait on projects to load to update the filter
        projects() {
            this.$emit('updateFilter', this.activeFilters);
        },
    },
    mounted() {
        const filterQuery = this.$route.query.filter;
        if (filterQuery) {
            const queryFilters: string[] = [];
            filterQuery
                .toString()
                .split(',')
                .forEach((filter: string) => queryFilters.push(filter));

            for (let i = 0; queryFilters.length >= i; i++) {
                if (this.filterProps.includes(queryFilters[i]))
                    this.activeFilters.push(queryFilters[i] as never);
                else if (queryFilters[i] !== undefined) {
                    this.filterProps.forEach((p: string) =>
                        this.activeFilters.push(p as never),
                    );
                }
            }
        } else {
            this.filterProps.forEach((p: string) =>
                this.activeFilters.push(p as never),
            );
        }

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
