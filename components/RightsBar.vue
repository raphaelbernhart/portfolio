<template>
    <div class="relative py-6 w-full bg-primary">
        <div
            class="relative container grid grid-cols-1 gap-y-8 text-primary sm:gap-y-0 md:grid-cols-4"
        >
            <div class="sm:pr-4 order-3 sm:order-1 text-sm flex items-center">
                © {{ new Date().getFullYear() }} Raphael Bernhart | All Rights
                Reserved
            </div>
            <div
                class="sm:col-span-3 flex flex-wrap items-center gap-x-6 sm:mt-4 md:mt-0 gap-y-4 order-1 sm:order-2 md:gap-y-0"
            >
                <nuxt-link
                    :to="localePath('/imprint')"
                    class="underline transition-colors hover:text-gray-400"
                    >{{ $t('footer.imprint') }}
                </nuxt-link>
                <nuxt-link
                    :to="localePath('/imprint')"
                    class="underline transition-colors hover:text-gray-400"
                    >{{ $t('footer.privacy') }}
                </nuxt-link>
                <nuxt-link
                    :to="localePath('/agb')"
                    class="underline transition-colors hover:text-gray-400"
                    >{{ $t('footer.agb') }}
                </nuxt-link>
            </div>
            <div
                class="relative sm:absolute order-2 sm:order-3 bottom-0 md:bottom-auto right-0 text-sm flex items-center"
            >
                <span>
                    <a
                        href="https://github.com/raphaelbernhart/portfolio"
                        target="_blank"
                        class="font-bold"
                        >v{{ $config.PROJECT_VERSION }}</a
                    >
                    made with ♥️ by
                    <a
                        href="https://github.com/raphaelbernhart"
                        target="_blank"
                        class="font-bold"
                        >@raphaelbernhart</a
                    ></span
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'RightsBar',
});
</script>
