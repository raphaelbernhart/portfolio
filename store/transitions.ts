import { MutationTree } from 'vuex';

export const state = () => ({
    initTransitionFinished: false,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
    finishInitTransition: (state) => (state.initTransitionFinished = true),
};
