import { Middleware } from '@nuxt/types';

const navigationMiddleware: Middleware = (context) => {
    context.store.commit('closeNavigation');
};

export default navigationMiddleware;
