<template>
    <div class="relative bg-primary">
        <div class="container">
            <div class="relative flex justify-between pt-44 xs:pt-28">
                <div class="flex items-center gap-x-4">
                    <span class="text-white text-xl font-light">01</span>
                    <div class="h-[1px] w-28 bg-white"></div>
                    <span class="text-white text-xl font-light">{{
                        projects.length > 10
                            ? projects.length
                            : '0' + projects.length
                    }}</span>
                </div>
                <!-- Filter -->
                <ProjectsFilter @updateFilter="updateFilter" />
            </div>

            <!-- Projects -->
            <div
                id="projects-container"
                class="relative flex flex-col mt-6 xs:mt-14 md:mt-28 pb-24 gap-y-48 md:gap-y-52"
            >
                <Project
                    v-for="project in projects"
                    :id="project.title"
                    :key="project.title"
                    :class="{ hidden: project.hidden }"
                    :hidden="project.hidden"
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
import ProjectsFilter from '~/components/widgets/ProjectsFilter.vue';

export default Vue.extend({
    name: 'WorksPage',
    components: {
        Project,
        ProjectsFilter,
    },
    data() {
        return {
            projectsFilter: [] as Array<string>,
            projects: [] as Array<Record<string, any>>,
            hiddenProjects: [] as Array<Record<string, any>>,
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
                this.projects.forEach((project: Record<string, any>) => {
                    project.hidden = false;
                });
            } catch (err: any) {
                console.log(err);
            }
        },
        updateFilter(newFilter: Array<string>) {
            this.projectsFilter = newFilter;

            this.filterProjects();
        },
        filterProjects() {
            this.projects.forEach((project: Record<string, any>) => {
                let categoryContained = false;
                for (let i = 0; project.categories.length >= i; i++) {
                    if (this.projectsFilter.includes(project.categories[i])) {
                        categoryContained = true;
                    }
                }

                const projectIndex = this.projects.indexOf(project);
                if (categoryContained) {
                    this.projects[projectIndex].hidden = false;
                } else {
                    this.projects[projectIndex].hidden = true;
                }
            });
            this.$forceUpdate();
            setTimeout(() => {
                this.$nuxt.$emit('update-locomotive');
            }, 100);
        },
    },
});
</script>
