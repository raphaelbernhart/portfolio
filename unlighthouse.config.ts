export default {
    site: 'raphaelbernhart.at',
    scanner: {
        samples: 3,
        ignoreI18nPages: true,
        device: 'mobile',
        throttle: true,
    },
    debug: true,
    puppeteerClusterOptions: {
        maxConcurrency: 1,
    },
};
