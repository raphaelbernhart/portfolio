import { MutationTree } from 'vuex';

export const state = () => ({
    navigationOpened: false,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
    openNavigation: (state) => (state.navigationOpened = true),
    closeNavigation: (state) => (state.navigationOpened = false),
};
