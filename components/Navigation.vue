<template>
    <!-- Navigation -->
    <div>
        <div
            class="pointer-events-none fixed z-40 w-screen bg-primary px-10 md:px-12 p-12 py-8 md:py-12 text-[#fffbef] md:bg-transparent md:mix-blend-difference"
        >
            <div
                class="relative flex items-center justify-between w-full gap-x-4"
            >
                <!-- LOGO -->
                <nuxt-link
                    class="relative z-40 flex-initial transition-colors cursor-pointer pointer-events-auto h-14 w-14 hover:text-gray-400"
                    :to="localePath('/')"
                >
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 68 68"
                        style="enable-background: new 0 0 68 68"
                        xml:space="preserve"
                    >
                        <g class="fill-current">
                            <g>
                                <path
                                    d="M0.1,5.5h15.3c10,0,14.4,5.9,14.4,12.2c0,5.7-4.1,11.3-12.6,12.2l14.7,18.7h-7.4L9.8,30H7.5v18.5H0.1V5.5z M7.5,7.3v20.9h5.8c5.2,0,9-5.3,9-11c0-5.7-3.9-9.9-9.2-9.9H7.5z"
                                />
                                <path
                                    d="M49.9,5.5c4.9,0,14,2.2,14,10.9c0,5.1-2.9,8.1-6.7,9.5C62,26.7,68,29.9,68,36.8c0,8.2-7.7,11.8-16.1,11.8 H33.6V5.5H49.9z M41,7.1v18.5h6c4,0,9.5-2,9.5-9.7c0-7.8-5.5-8.8-9.5-8.8H41z M41,46.9h9.6c6.7,0,10-4.7,10-10.3 c0-5.3-3-9.2-9.4-9.2H41V46.9z"
                                />
                            </g>
                            <rect
                                id="Rechteck_7"
                                y="57.2"
                                class="st1"
                                width="68"
                                height="5.4"
                            />
                        </g>
                    </svg>
                </nuxt-link>

                <!-- Links -->
                <div
                    class="relative z-40 flex items-center font-thin pointer-events-auto gap-x-10"
                >
                    <div class="pt-[3px] font-display text-xl">
                        <nuxt-link
                            class="transition-colors cursor-pointer"
                            :class="{
                                'text-gray-500 hover:text-gray-300':
                                    $i18n.locale !== 'en',
                            }"
                            :to="switchLocalePath($i18n.locales[1].code)"
                        >
                            EN
                        </nuxt-link>
                        /
                        <nuxt-link
                            class="transition-colors cursor-pointer"
                            :class="{
                                'text-gray-500 hover:text-gray-300':
                                    $i18n.locale !== 'de',
                            }"
                            :to="switchLocalePath($i18n.locales[0].code)"
                        >
                            DE
                        </nuxt-link>
                    </div>
                    <div
                        id="burgerMenu"
                        class="w-10 h-10 p-2 transition-colors cursor-pointer hover:text-gray-400"
                        @click="toggleNavigation()"
                    >
                        <svg
                            class="w-full h-full"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 18.9 18.9"
                            xml:space="preserve"
                        >
                            <g
                                transform="translate(-48 -48)"
                                class="fill-current"
                            >
                                <g id="Gruppe_2" transform="translate(48 48)">
                                    <path
                                        class="st0"
                                        d="M2.1,4.2C0.9,4.2,0,3.3,0,2.1S0.9,0,2.1,0c1.2,0,2.1,0.9,2.1,2.1l0,0C4.2,3.3,3.3,4.2,2.1,4.2z"
                                    />
                                    <path
                                        class="st0"
                                        d="M9.4,4.2c-1.2,0-2.1-0.9-2.1-2.1S8.3,0,9.4,0s2.1,0.9,2.1,2.1l0,0C11.6,3.3,10.6,4.2,9.4,4.2z"
                                    />
                                    <path
                                        class="st0"
                                        d="M16.8,4.2c-1.2,0-2.1-0.9-2.1-2.1S15.6,0,16.8,0s2.1,0.9,2.1,2.1l0,0C18.9,3.3,17.9,4.2,16.8,4.2z"
                                    />
                                    <path
                                        class="st0"
                                        d="M2.1,11.6C0.9,11.6,0,10.6,0,9.4s0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1l0,0 C4.2,10.6,3.3,11.6,2.1,11.6z"
                                    />
                                    <path
                                        class="st0"
                                        d="M9.4,11.6c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C11.6,10.6,10.6,11.6,9.4,11.6z"
                                    />
                                    <path
                                        class="st0"
                                        d="M16.8,11.6c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C18.9,10.6,17.9,11.6,16.8,11.6z"
                                    />
                                    <path
                                        class="st0"
                                        d="M2.1,18.9c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2.1,0.9,2.1,2.1l0,0 C4.2,17.9,3.3,18.9,2.1,18.9z"
                                    />
                                    <path
                                        class="st0"
                                        d="M9.4,18.9c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C11.6,17.9,10.6,18.9,9.4,18.9z"
                                    />
                                    <path
                                        class="st0"
                                        d="M16.8,18.9c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1l0,0 C18.9,17.9,17.9,18.9,16.8,18.9z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <NavigationMenu
            v-if="$store.state.navigation.navigationOpened"
            @closeBurgerMenu="closeBurgerMenu"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationMenu from '~/components/NavigationMenu.vue';

export default Vue.extend({
    name: 'NavigationComponent',
    components: {
        NavigationMenu,
    },
    data() {
        return {
            anime: {} as Record<string, any>,
            burgerMenuAnimation: '' as any,
        };
    },
    mounted() {
        this.anime = (this as any).$anime;

        this.burgerMenuAnimation = this.anime.timeline({
            duration: 550,
            easing: 'easeInOutQuad',
        });
    },
    methods: {
        openBurgerMenu() {
            const element = document.querySelector('#burgerMenu');

            if (this.burgerMenuAnimation.reversed) {
                this.burgerMenuAnimation.reverse();
                this.burgerMenuAnimation.play();
                return;
            }

            this.burgerMenuAnimation.add(
                {
                    targets: element,
                    rotate: [0, 90],
                },
                '0',
            );
            this.burgerMenuAnimation.add(
                {
                    targets:
                        element?.childNodes[0].childNodes[0].childNodes[0]
                            .childNodes[2],
                    translateY: [0, -35],
                    opacity: [1, 0],
                },
                '0',
            );
            this.burgerMenuAnimation.add(
                {
                    targets:
                        element?.childNodes[0].childNodes[0].childNodes[0]
                            .childNodes[6],
                    translateX: [0, -35],
                    opacity: [1, 0],
                },
                '0',
            );
            this.burgerMenuAnimation.add(
                {
                    targets:
                        element?.childNodes[0].childNodes[0].childNodes[0]
                            .childNodes[10],
                    translateX: [0, 35],
                    opacity: [1, 0],
                },
                '0',
            );
            this.burgerMenuAnimation.add(
                {
                    targets:
                        element?.childNodes[0].childNodes[0].childNodes[0]
                            .childNodes[14],
                    translateY: [0, 35],
                    opacity: [1, 0],
                },
                '0',
            );
        },
        closeBurgerMenu() {
            this.burgerMenuAnimation.reverse();
            this.burgerMenuAnimation.play();
        },
        toggleNavigation() {
            if (this.$store.state.navigation.navigationOpened) {
                this.$store.commit('navigation/closeNavigation');
                // closeBurgerMenu wird automatisch durch child getriggert
            } else {
                this.$store.commit('navigation/openNavigation');
                this.openBurgerMenu();
            }
        },
    },
});
</script>
