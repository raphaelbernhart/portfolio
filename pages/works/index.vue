<template>
    <div class="relative bg-primary">
        <div class="container">
            <div class="flex justify-between pt-36">
                <div class="flex items-center gap-x-4">
                    <span class="text-white text-xl font-light">01</span>
                    <div class="h-[1px] w-28 bg-white"></div>
                    <span class="text-white text-xl font-light">14</span>
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
                class="relative flex flex-col mt-14 pb-24 gap-y-24"
            >
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <Project
                    id="90a8sdf"
                    name="Syndena"
                    :categories="['Branding', 'Design']"
                    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
    head() {
        return {
            title: 'Works',
        };
    },
});
</script>
