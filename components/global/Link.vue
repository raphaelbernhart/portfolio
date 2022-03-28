<template>
    <a
        :class="{
            'text-white hover:text-gray-200': light,
            'hover:text-secondary text-primary': !light,
        }"
        class="transition-color hover-trigger inline-block text-lg font-semibold italic"
        :href="link"
        :target="openInNewWindow"
        rel="noopener noreferrer"
    >
        <div class="flex items-center">
            {{ text }}
            <svg
                class="hover-target ml-2 inline-block h-5 w-5 fill-current transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
            >
                <title>arrow-right</title>
                <g fill="none">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z"
                        class="fill-current"
                    ></path>
                </g>
            </svg>
        </div>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LinkComponent',
    props: {
        text: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
            validator: (v) => {
                // eslint-disable-next-line unicorn/escape-case
                const regexp =
                    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
                if (regexp.test(v)) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        light: {
            type: Boolean,
            default: false,
            required: false,
        },
        // eslint-disable-next-line vue/prop-name-casing
        'new-window': {
            type: Boolean,
            default: true,
            required: false,
        },
    },
    computed: {
        openInNewWindow(): string {
            if (this['new-window']) return '_blank';
            else return '_self';
        },
    },
});
</script>

<style lang="css" scoped>
.hover-trigger:hover .hover-target {
    transform: translateX(6px);
}
</style>
