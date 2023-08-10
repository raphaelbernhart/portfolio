import pkg from './package.json';
// eslint-disable-next-line nuxt/no-cjs-in-config
const axios = require('axios');

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

    dev: process.env.NODE_ENV !== 'production',

    publicRuntimeConfig: {
        PROJECT_VERSION: pkg.version,
    },

    env: {
        CONTENT_API_URL: 'https://content.raphaelbernhart.at/',
    },

    // Loading Bar
    loading: false,

    transition: {
        // beforeLeave() {
        //     const layer = document.querySelectorAll('.left-layer');
        //     layer.forEach((item) => {
        //         item.classList.toggle('active');
        //     });
        // },
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/base.css', '@/assets/css/transitions.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/letterizejs/letterizejs.client.ts',
        '@/plugins/cookieconsent/cookieconsent.client.ts',
        '@/plugins/lenis/lenis.client.ts',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    hooks: {
        render: {
            // Send Errors to sentry
            errorMiddleware(app) {
                app.use((error, _req, _res, next) => {
                    if (error) {
                        process.sentry.captureException(error);
                    }
                    next(error);
                });
            },
        },
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        'nuxt-animejs',
        // '@unlighthouse/nuxt',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/i18n',
        'nuxt-leaflet',
        'nuxt-mail',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxtjs/sentry',
        'vue-plausible',
    ],

    tailwindcss: {
        viewer: false,
    },

    googleFonts: {
        families: {
            Poppins: {
                wght: [200, 400, 600, 700],
                ital: [300, 400, 600],
            },
        },
        display: 'swap',
        prefetch: true,
        preconnect: true,
        download: true,
        base64: false,
        useStylesheet: false,
    },

    plausible: {
        domain: 'raphaelbernhart.at',
        trackLocalhost: false,
        apiHost: 'https://plausible.raphaelbernhart.at',
        hashMode: true,
        enableAutoOutboundTracking: true,
    },

    mail: {
        message: {
            to: 'mail@raphaelbernhart.at',
        },
        smtp: {
            host: 'mail.raphaelbernhart.at',
            port: 465,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        },
    },

    robots: {
        UserAgent: '*',
        Allow: '/',
        Disallow: '/applications/',
    },

    sitemap: {
        hostname: 'https://raphaelbernhart.at',
        gzip: true,
        exclude: ['/applications/**'],
        i18n: true,
        defaults: {
            changefreq: 'weekly',
            priority: 0.5,
            lastmod: new Date(),
        },
        routes: async () => {
            const { data } = await axios.get(
                `https://content.raphaelbernhart.at/items/rb_portfolio_projects?filter[status][_eq]=published&fields=title,date_updated,priority`,
            );

            const routes = data.data.map((project) => {
                return {
                    url: `/works/${project.title}`,
                    priority: project.priority,
                    changefreq: 'monthly',
                    lastmod: project.date_updated,
                };
            });
            const customRoutes = [
                {
                    url: '/',
                    priority: 1.0,
                },
                {
                    url: '/works',
                    priority: 0.9,
                },
                {
                    url: '/profile',
                    priority: 0.7,
                },
                {
                    url: '/contact',
                    priority: 0.7,
                },
            ];
            customRoutes.forEach((route) => {
                routes.push(route);
            });

            return routes;
        },
    },

    router: {
        middleware: 'NavigationMiddleware',
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
        browserBaseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'de',
        },
        meta: {
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
        baseUrl: 'https://raphaelbernhart.at',
        defaultLocale: 'de',
        lazy: true,
        langDir: '~/lang/',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
    },

    unlighthouse: {
        debug: true,
        // exclude: [],
        scanner: {
            ignoreI18nPages: true,
            device: 'mobile',
        },
    },

    sentry: {
        dsn: 'https://0ff9f888bd394c02936e368e2da46590@o440126.ingest.sentry.io/6627543',
        lazy: true,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        analyze: false,
        devtools: false,
    },
};
