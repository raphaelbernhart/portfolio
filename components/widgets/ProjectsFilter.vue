<template>
    <div
        class="relative flex flex-wrap gap-y-4 pt-8 md:pt-0 gap-x-6 items-center w-full sm:w-auto z-20"
    >
        <span
            class="text-primary text-xl sm:text-lg mr-6 flex items-center gap-x-2 cursor-pointer sm:cursor-default"
            @click="toggleFilterHide()"
            >Filter
            <span class="hidden sm:inline-block">:</span>
            <span class="inline-block sm:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                >
                    <title>filter</title>
                    <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2"
                        fill="none"
                        class="stroke-current"
                    >
                        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
                    </g>
                </svg>
            </span>
        </span>
        <div
            class="absolute rounded-xl sm:rounded-none sm:relative w-full sm:w-auto left-0 top-20 sm:top-0 flex flex-wrap gap-x-2 gap-y-2 items-center overflow-hidden transition-all bg-hover2 sm:bg-transparent px-4 sm:px-0 shadow-lg sm:shadow-none z-20"
            :class="{
                'h-0 py-0': filterHidden,
                'h-[160px] py-4 sm:h-auto sm:py-0': !filterHidden,
            }"
        >
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
            filterHidden: true,
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

        if (window.innerWidth >= 640) this.filterHidden = false;
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
        toggleFilterHide() {
            if (window.innerWidth <= 640)
                this.filterHidden = !this.filterHidden;
        },
    },
});
</script>
