<template>
    <div class="relative bg-primary">
        <div class="container">
            <div class="flex justify-between pt-32 xs:pt-36">
                <div class="flex items-center gap-x-4">
                    <span class="text-white text-xl font-light">01</span>
                    <div class="h-[1px] w-28 bg-white"></div>
                    <span class="text-white text-xl font-light">{{
                        projects.length > 10
                            ? projects.length
                            : '0' + projects.length
                    }}</span>
                </div>
                <div
                    class="flex items-center gap-x-2 text-white cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <title>Filter Icon</title>
                        <g class="fill-current">
                            <path
                                d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                            ></path>
                        </g>
                    </svg>
                    <span class="text-white text-xl font-light uppercase"
                        >Filter</span
                    >
                </div>
            </div>

            <!-- Projects -->
            <div
                id="projects-container"
                class="relative flex flex-col mt-6 xs:mt-14 pb-24 gap-y-48 md:gap-y-64"
            >
                <Project
                    v-for="project in projects"
                    :id="project.title"
                    :key="project.title"
                    :name="project.title"
                    :categories="project.categories"
                    :image="`https://content.raphaelbernhart.at/assets/${project.image}?width=1400&quality=100`"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Project from '~/components/widgets/ProjectCard.vue';

export default Vue.extend({
    name: 'WorksPage',
    components: {
        Project,
    },
    layout: 'horizontal',
    data() {
        return {
            apiQuery: '',
            projects: [] as Array<Record<string, any>>,
        };
    },
    head() {
        return {
            title: 'Works',
        };
    },
    mounted() {
        this.fetchProjects();
    },
    methods: {
        async fetchProjects() {
            try {
                const res = await this.$axios.get(
                    `${process.env.CONTENT_API_URL}items/rb_portfolio_projects`,
                );

                this.projects = res.data.data;
            } catch (err: any) {
                console.log(err);
            }
        },
    },
});
</script>
