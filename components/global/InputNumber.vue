<template>
    <div class="flex flex-col">
        <div>
            <label class="text-md" :for="id">{{ label }}<span v-if="required">*</span></label>
        </div>
        <input :id="id" v-model="inputValue" :name="id" type="number" class="bg-gray-200 py-3 px-4 mt-1 focus:outline-none" :placeholder="placeholder" :min="min" :max="max">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { genID } from '@/services/Helpers'

export default Vue.extend({
    name: 'ButtonComponent',
    props: {
        label: {
            type: String,
            required: true
        },
        required: {
            type: Boolean,
            required: false,
            default: false
        },
        placeholder: {
            type: String,
            required: true
        },
        min: {
            type: Number,
            required: false,
            default: 0
        },
        max: {
            type: Number,
            required: false,
            default: -1
        },
        value: {
            type: String,
            required: false,
            default: ''
        }
    },
    data: () => {
        return {
            id: ''
        }
    },
    computed: {
        inputValue: {
            get () {
                return (this as any).value
            },
            set (value) {
                (this as any).$emit('value', value)
            }
        }
    },
    created() {
        (this as any).id = genID(2);
    }
})
</script>