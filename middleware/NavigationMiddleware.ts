import { Context, Middleware } from '@nuxt/types';

const navigationMiddleware: Middleware = (context: Context) => {
    // Close Navigation when route to a new page
    context.store.commit('navigation/closeNavigation');

    if (process.client) {
        // Scroll top on route change
        setTimeout(() => {
            window.$nuxt.$emit('scroll-top-locomotive', {
                duration: 0,
                disableLerp: true,
            });
        }, 150);

        // Update locomotive scroll when route to a new page
        setTimeout(() => {
            window.$nuxt.$emit('update-locomotive');
        }, 350);
    }
};

export default navigationMiddleware;
