<template>
    <div
        class="flex flex-row items-center gap-x-3 bg-hover2 hover:bg-light p-4 rounded-xl cursor-pointer transition-colors duration-300"
        @click="openFile(id)"
    >
        <div class="rounded-lg bg-transparent h-full w-12 p-3">
            <svg
                v-if="type === 'application/pdf'"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="w-full h-full"
            >
                <path
                    class="fill-current"
                    d="M9.58442,2.00201 C9.98167,2.00201 10.3627,2.15959 10.6439,2.44018 L10.6439,2.44018 L12.5595,4.35153 C12.8415,4.63293 13,5.01496 13,5.41336 L13,5.41336 L13,7.08419 C13.5826,7.29011 14,7.84573 14,8.49884 L14,8.49884 L14,12.50201 C14,13.3305 13.3284,14.00201 12.5,14.00201 L12.5,14.00201 L3.5,14.00201 C2.67157,14.00201 2,13.3305 2,12.50201 L2,12.50201 L2,8.49884 C2,7.84573 2.4174,7.29011 3,7.08419 L3,7.08419 L3,3.50201 C3,2.67359 3.67157,2.00201 4.5,2.00201 L4.5,2.00201 Z M12.5,7.99884 L3.5,7.99884 C3.22386,7.99884 3,8.2227 3,8.49884 L3,12.502 C3,12.7782 3.22386,13.002 3.5,13.002 L12.5,13.002 C12.7761,13.002 13,12.7782 13,12.502 L13,8.49884 C13,8.2227 12.7761,7.99884 12.5,7.99884 Z M5.33296,9.00305 C5.97736,9.00305 6.49976,9.52545 6.49976,10.1699 C6.49976,10.8143 5.97736,11.3366 5.33296,11.3366 L5.33296,11.3366 L4.99976,11.3366 L4.99976,11.5031 C4.99976,11.7792 4.7759,12.0031 4.49976,12.0031 C4.22361,12.0031 3.99976,11.7792 3.99976,11.5031 L3.99976,11.5031 L3.99976,9.50305 C3.99976,9.22691 4.22361,9.00305 4.49976,9.00305 L4.49976,9.00305 Z M7.99974,9.00305 C8.82817,9.00305 9.49974,9.67463 9.49974,10.5031 C9.49974,11.3315 8.82816,12.0031 7.99974,12.0031 L7.99974,12.0031 L7.49829,12.0031 C7.22215,12.0031 6.99829,11.7792 6.99829,11.5031 L6.99829,11.5031 L6.99829,9.50305 C6.99829,9.22691 7.22215,9.00305 7.49829,9.00305 L7.49829,9.00305 Z M11.4988,9.00305 C11.7749,9.00305 11.9988,9.22691 11.9988,9.50305 C11.9988,9.77919 11.7749,10.0031 11.4988,10.0031 L10.9998,10.0031 L10.9994,10.3375 L11.4988,10.3375 C11.7749,10.3375 11.9988,10.5614 11.9988,10.8375 C11.9988,11.1137 11.7749,11.3375 11.4988,11.3375 L11,11.3375 L11.0005,11.5018 C11.0012,11.7779 10.7779,12.0024 10.5017,12.0030016 C10.2256,12.0037 10.0012,11.7805 10.0005,11.5043 L9.99878,10.8369 L10.0005,9.50242 C10.0008,9.22653 10.2246,9.00305 10.5005,9.00305 L11.4988,9.00305 Z M7.99974,10.0031 L7.99829,10.0031 L7.99829,11.0031 C8.27588,11.0031 8.49974,10.7792 8.49974,10.5031 C8.49974,10.2269 8.27588,10.0031 7.99974,10.0031 L7.99974,10.0031 Z M5.33296,10.0031 L4.99976,10.0031 L4.99976,10.3366 L5.33296,10.3366 C5.42508,10.3366 5.49976,10.262 5.49976,10.1699 C5.49976,10.0777 5.42508,10.0031 5.33296,10.0031 L5.33296,10.0031 Z M9,3.00201 L4.5,3.00201 C4.22386,3.00201 4,3.22587 4,3.50201 L4,6.99884 L12,6.99884 L12,6 L10.5,6 C9.67157,6 9,5.32843 9,4.5 L9,3.00201 Z M10,3.21035 L10,4.5 C10,4.77614 10.2239,5 10.5,5 L10.5,5 L11.7936,5 L10,3.21035 Z"
                />
            </svg>
        </div>
        <div class="w-40">
            <dfn class="not-italic" :title="title">
                <h4 class="text-base text-white font-semibold">
                    {{ getTitle(title) }}
                </h4>
                <h5 class="text-sm text-light text-gray-500 italic">
                    {{ getFilesize(filesize) }}
                </h5>
            </dfn>
        </div>
        <div class="flex items-center pl-12 pr-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
            >
                <title>download</title>
                <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    class="stroke-current"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <path d="M7 10l5 5 5-5"></path>
                    <path d="M12 15V3"></path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ApplicationFiles',
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        filesize: {
            type: String,
            required: true,
        },
        filename: {
            type: String,
            required: true,
        },
    },
    methods: {
        getTitle(title: string) {
            if (title.length >= 18) {
                return title.slice(0, 18) + '...';
            } else return title;
        },
        getFilesize(filesize: number): string {
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
            if (filesize === 0) return '0 Byte';
            const i = Math.floor(Math.log(filesize) / Math.log(1024));
            return Math.round(filesize / Math.pow(1024, i)) + ' ' + sizes[i];
        },
        openFile(id: string): void {
            window
                .open(
                    `${process.env.CONTENT_API_URL}assets/${id}?download=`,
                    '_blank',
                )
                ?.focus();
        },
    },
});
</script>
