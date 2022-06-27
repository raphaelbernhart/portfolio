<template>
    <div class="relative py-6 w-full bg-primary">
        <div
            class="relative container grid grid-cols-1 text-primary md:grid-cols-4"
        >
            <div class="pr-4 text-sm flex items-center">
                © {{ new Date().getFullYear() }} Raphael Bernhart | All Rights
                Reserved
            </div>
            <div
                class="col-span-3 flex flex-wrap items-center gap-x-6 mt-4 md:mt-0 gap-y-4 md:gap-y-0"
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
                class="relative mt-16 sm:mt-0 sm:absolute bottom-0 md:bottom-auto right-0 text-sm flex items-center"
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
