import { Middleware } from '@nuxt/types';

const navigationMiddleware: Middleware = (context) => {
    context.store.commit('navigation/closeNavigation');
};

export default navigationMiddleware;
