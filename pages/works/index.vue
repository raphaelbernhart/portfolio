<template>
    <div class="relative bg-primary">
        <div class="container">
            <div class="relative flex justify-between pt-44 xs:pt-28">
                <div class="hidden sm:flex items-center gap-x-4">
                    <span class="text-white text-xl font-light">01</span>
                    <div class="h-[1px] w-28 bg-white"></div>
                    <span class="text-white text-xl font-light">{{
                        getProjectCount()
                    }}</span>
                </div>
                <!--
                    Filter
                    Pass projects to watch in child component on project load
                -->
                <ProjectsFilter
                    :projects="projects"
                    @updateFilter="updateFilter"
                />
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
                    :image="`https://content.raphaelbernhart.at/assets/${project.image}?width=1300&height=650&quality=90&format=webp`"
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
            projectCount: 0,
        };
    },
    head() {
        return {
            title: 'Works',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: (this as any).$t('works.meta.description'),
                },
            ],
        };
    },
    watch: {
        projects() {
            this.getProjectCount();
        },
    },
    mounted() {
        this.fetchProjects();

        // Scroll a little bit down to activate image scrolling animation
        setTimeout(() => {
            // Update Locomotive Scroll
            this.$nuxt.$emit('update-locomotive');
            this.$nuxt.$emit('scroll-locomotive', 5);
        }, 75);
    },
    methods: {
        async fetchProjects() {
            try {
                const res = await this.$axios.get(
                    `${process.env.CONTENT_API_URL}items/rb_portfolio_projects`,
                );

                this.projects = res.data.data;
                this.projects.forEach((project: Record<string, any>) => {
                    if (
                        project.status === 'draft' ||
                        project.status === 'archived'
                    )
                        project.hidden = true;
                    else project.hidden = false;
                });
            } catch (err: any) {}
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
                const status = this.projects[projectIndex].status;
                if (status !== 'draft' && status !== 'archived') {
                    if (categoryContained) {
                        this.projects[projectIndex].hidden = false;
                    } else {
                        this.projects[projectIndex].hidden = true;
                    }
                }
            });
            this.$forceUpdate();
            setTimeout(() => {
                this.$nuxt.$emit('update-locomotive');
            }, 100);
        },
        getProjectCount() {
            let count = 0;
            this.projects.forEach((project: Record<string, any>) => {
                if (
                    !project.hidden &&
                    project.status !== 'draft' &&
                    project.status !== 'archived'
                )
                    count++;
            });

            return count > 10 ? count : '0' + count;
        },
    },
});
</script>
