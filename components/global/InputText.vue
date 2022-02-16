<template>
    <div class="relative flex flex-col">
        <div>
            <label
                ref="label"
                class="text-sm uppercase absolute top-4 left-0 text-text pointer-events-none"
                :for="id"
                >{{ label }}<span v-if="required">*</span></label
            >
        </div>
        <input
            :id="id"
            ref="input"
            v-model="inputValue"
            :name="id"
            type="text"
            class="focus:outline-none mt-1 bg-transparent py-3"
            @focus="onFocus()"
            @blur="onBlur()"
        />
        <!-- Lines -->
        <div class="h-[1px] w-full bg-gray-400 absolute bottom-0 left-0"></div>
        <div
            ref="line"
            class="h-[1px] w-full bg-text absolute bottom-0 left-0"
        ></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { genID } from '@/services/Helpers';

export default Vue.extend({
    name: 'ButtonComponent',
    props: {
        label: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            required: false,
            default: false,
        },
        value: {
            type: String,
            required: false,
            default: '',
        },
    },
    data() {
        return {
            id: '',
            inputAnimation: {} as any,
        };
    },
    computed: {
        inputValue: {
            get() {
                return (this as any).value;
            },
            set(value) {
                (this as any).$emit('value', value);
            },
        },
    },
    mounted() {
        (this as any).id = genID(2);
        (this as any).initInputAnimation();
    },
    methods: {
        onFocus() {
            if ((this as any).$refs.input.value) return;
            if ((this as any).inputAnimation.reversed)
                (this as any).inputAnimation.reverse();

            (this as any).inputAnimation.play();
        },
        onBlur() {
            if ((this as any).$refs.input.value) return;
            (this as any).inputAnimation.reverse();
            (this as any).inputAnimation.play();
        },
        initInputAnimation() {
            (this as any).inputAnimation = (this as any).$anime.timeline({
                duration: 300,
                easing: 'easeInOutQuad',
                autoplay: false,
            });

            (this as any).inputAnimation.add({
                targets: this.$refs.label,
                translateY: [0, -25],
                // color: ['#767c89', '#171716'],
            });

            (this as any).inputAnimation.add(
                {
                    targets: this.$refs.line,
                    scaleX: [0, 1],
                },
                '-=200',
            );
        },
    },
});
</script>
