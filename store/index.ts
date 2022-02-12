import * as Vuex from 'vuex';

export default () =>
    new Vuex.Store({
        state: {
            navigationOpened: false,
        },
        mutations: {
            openNavigation(state: any): void {
                state.navigationOpened = true;
            },
            closeNavigation(state: any): void {
                state.navigationOpened = false;
            },
        },
        actions: {},
        modules: {},
    });
