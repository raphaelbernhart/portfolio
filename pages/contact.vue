<template>
    <div class="relative bg-primary min-h-screen text-primary">
        <div class="container sm:h-screen">
            <div class="grid grid-cols-2 h-full">
                <div
                    class="relative sm:static pt-36 sm:pt-48 col-span-2 h-screen sm:min-h-0 sm:col-span-1"
                >
                    <div
                        data-scroll
                        data-scroll-class="FADE_UP"
                        class="relative"
                    >
                        <h1
                            class="font-display text-6xl uppercase max-w-xl leading-tight"
                        >
                            {{ $t('contact.leading') }}
                        </h1>
                    </div>
                    <!-- Map -->
                    <div
                        class="absolute left-0 bottom-0 h-[40%] xs:h-1/2 xl:h-[60%] w-[120%] sm:w-1/2 -ml-10 sm:ml-0 z-0"
                    >
                        <InteractiveMapComponent />
                    </div>
                </div>
                <div
                    class="relative sm:static sm:bg-transparent py-28 sm:py-0 sm:min-h-screen w-full sm:flex items-center h-full col-span-2 sm:col-span-1"
                >
                    <div
                        data-scroll
                        data-scroll-class="FADE_UP"
                        data-scroll-animation-delay="300"
                        class="text-text relative z-10 sm:pl-24 sm:width-full"
                    >
                        <h2
                            class="font-display text-3xl uppercase max-w-xl leading-tight"
                        >
                            {{ $t('contact.form.headline') }}
                        </h2>
                        <div class="mt-12 flex flex-wrap justify-between gap-8">
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
                        class="absolute -right-10 sm:right-0 top-0 bg-white h-screen w-screen sm:w-1/2"
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
