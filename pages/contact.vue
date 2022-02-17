<template>
    <div class="relative bg-primary min-h-screen text-primary">
        <div class="container h-screen">
            <div class="grid grid-cols-2 h-full">
                <div class="pt-48">
                    <div class="relative z-10">
                        <h1
                            class="font-display text-6xl uppercase max-w-xl leading-tight"
                        >
                            {{ $t('contact.leading') }}
                        </h1>
                    </div>
                    <!-- Map -->
                    <div
                        class="absolute left-0 top-0 w-1/2 h-full z-0 pt-[360px]"
                    >
                        <InteractiveMapComponent />
                    </div>
                </div>
                <div class="flex items-center h-full">
                    <div class="text-text relative z-10 pl-24">
                        <h2
                            class="font-display text-3xl uppercase max-w-xl leading-tight"
                        >
                            {{ $t('contact.form.headline') }}
                        </h2>
                        <div class="mt-12 flex flex-wrap gap-8">
                            <InputText
                                :label="$t('contact.form.name.title')"
                                :required="true"
                                @value="form.name = $event"
                            />
                            <InputText
                                :label="$t('contact.form.email.title')"
                                :required="true"
                                @value="form.email = $event"
                            />
                            <InputNumber
                                :label="$t('contact.form.phone.title')"
                                :required="false"
                                @value="form.phone = $event"
                            />
                        </div>
                        <div class="mt-8">
                            <InputTextArea
                                :label="$t('contact.form.message.title')"
                                :required="true"
                                @value="form.message = $event"
                            />
                        </div>
                        <Button class="mt-8" :text="$t('contact.form.send')" />
                    </div>
                    <!-- Background -->
                    <div
                        class="absolute right-0 top-0 bg-white h-screen w-1/2"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InteractiveMapComponent from '@/components/widgets/InteractiveMapComponent.vue';

export default Vue.extend({
    name: 'ContactPage',
    components: {
        InteractiveMapComponent,
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
        };
    },
    head() {
        return {
            title: 'Contact',
        };
    },
});
</script>
