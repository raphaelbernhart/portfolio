<template>
    <div class="relative bg-primary min-h-screen text-primary">
        <div class="container sm:h-screen">
            <div class="grid grid-cols-2 h-full">
                <div
                    class="relative sm:static pt-36 sm:pt-48 col-span-2 h-screen sm:min-h-0 sm:col-span-1"
                >
                    <div class="relative">
                        <h1
                            class="font-display text-5xl sm:text-6xl uppercase max-w-xl leading-tight"
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
                        <div v-if="error" class="text-red-500 mt-8">
                            {{ error }}
                        </div>
                        <div v-if="mailSent" class="text-green-500 mt-8">
                            {{ $t('contact.mailSent') }}
                        </div>
                        <Button
                            :text="$t('contact.form.send')"
                            class="mt-8"
                            @click.native="handleContactForm"
                        />
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
            error: '',
            mailSent: false,
        };
    },
    head() {
        return {
            title: 'Contact',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: (this as any).$t('contact.meta.description'),
                },
            ],
        };
    },
    methods: {
        handleContactForm() {
            // Return if required field is null
            let emptyField = false;
            const entries = Object.entries(this.form);

            entries.forEach((e: Array<string>) => {
                const reqEntries = ['name', 'email'];

                if (reqEntries.includes(e[0])) {
                    if (e[1] === '') emptyField = true;
                }
            });

            if (emptyField) {
                this.error = 'Bitte füllen Sie alle erforderlichen Felder aus.';
                setTimeout(() => {
                    this.error = '';
                }, 5000);
                return;
            }

            // Create Mail Message
            const message = `
                <h1>Anfrage über <b>raphaelbernhart.at</b></h1>
                <h3>Von: ${this.form.name}</h3>
                <h3>TelNr.: ${this.form.phone}</h3>
                <h3>E-Mail: ${this.form.email}</h3>
                <p><b>Nachricht:</b> <br/>${this.form.message}</p>
                <div style="margin-top: 20px;">
                    <a href="mailto:${this.form.email}?subject=Ihre%20Anfrage%20von%20raphaelbernhart.at">Antworten</a>
                </div>
            `;

            // Send Mail
            (this as any).$mail.send({
                from: 'noreply@raphaelbernhart.at',
                subject: 'Anfrage raphaelbernhart.at',
                html: message,
            });

            this.mailSent = true;
        },
    },
});
</script>
