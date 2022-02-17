export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Portfolio',
        // all titles will be injected into this template
        titleTemplate: '%s | Raphael Bernhart',
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: '',
            },
            {
                name: 'format-detection',
                content: 'telephone=no',
            },
        ],
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: '/favicon-dark.svg',
                id: 'favicon-tag',
            },
        ],
    },

    server: {
        port: 3000,
        host: '0.0.0.0',
    },

    // Loading Bar
    loading: false,

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/base.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/both.ts' },
        { src: '~/plugins/client.ts', mode: 'client' },
        { src: '~/plugins/server.ts', mode: 'server' },
        '@/plugins/letterizejs/letterizejs.client.ts',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        'nuxt-animejs',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        '@nuxtjs/i18n',
        'nuxt-leaflet',
    ],

    router: {
        middleware: 'NavigationMiddleware',
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'de',
        },
    },

    i18n: {
        locales: [
            {
                code: 'de',
                iso: 'de-DE',
                file: 'de.ts',
                name: 'Deutsch',
            },
            {
                code: 'en',
                iso: 'en-US',
                file: 'en.ts',
                name: 'English',
            },
        ],
        baseUrl: 'http://localhost:3000',
        defaultLocale: 'de',
        lazy: true,
        langDir: '~/lang/',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
