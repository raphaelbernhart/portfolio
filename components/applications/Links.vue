<template>
    <div class="relative">
        <nuxt-link
            :to="localePath(`/${page}`)"
            class="relative z-10 flex items-center h-[300px] group peer"
        >
            <div
                class="relative flex flex-col text-primary group-hover:text-gray-300 transition-colors container"
            >
                <h3
                    :class="{ 'text-right': align === 'r' }"
                    class="text-9xl uppercase font-display leading-none"
                >
                    {{ title }}
                </h3>
                <div
                    :class="{ 'flex-row-reverse': align === 'r' }"
                    class="flex items-center gap-x-6 text-gray-500 group-hover:text-gray-300 transition-colors"
                >
                    <span class="text-3xl uppercase tracking-wide">
                        {{ description }}
                    </span>
                    <div
                        :class="{ 'transform rotate-180': align === 'r' }"
                        class="inline-block h-4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="39.719"
                            height="23.402"
                            viewBox="0 0 39.719 23.402"
                            class="h-full w-full transform group-hover:translate-x-4 transition-transform"
                        >
                            <path
                                id="arrow_right"
                                data-name="arrow right"
                                d="M.414,10.563A1.538,1.538,0,0,0,0,11.7a1.593,1.593,0,0,0,1.655,1.655H34.03L27,20.493a1.418,1.418,0,0,0-.052,2.327,1.418,1.418,0,0,0,2.327-.052l9.93-9.93a1,1,0,0,0,.414-.517,1.952,1.952,0,0,0,.1-.621h0a1.952,1.952,0,0,0-.1-.621,1,1,0,0,0-.414-.517L29.272.634A1.418,1.418,0,0,0,26.944.582,1.418,1.418,0,0,0,27,2.909l7.033,7.137H1.655A1.693,1.693,0,0,0,.414,10.563Z"
                                class="fill-current"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </nuxt-link>
        <div
            ref="bg"
            class="absolute top-0 left-0 z-0 w-screen h-[300px] opacity-0 peer-hover:opacity-40 transition-all duration-700"
        >
            <img
                :src="background"
                :alt="`${title} Card Background Image`"
                class="w-full h-full object-center object-cover"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ApplicationLinks',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        page: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: false,
            default: '',
        },
        align: {
            type: String,
            required: false,
            default: 'l',
            validator: (d: string) => {
                if (d === 'r' || d === 'l') return true;
                else return false;
            },
        },
    },
});
</script>
