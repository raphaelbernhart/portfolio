import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

declare module 'vue/types/vue' {
    interface Vue {
        $locomotive: Record<string, any>;
    }
}

const install = (Vue: any) => {
    Vue.prototype.LocomotiveScroll = LocomotiveScroll;
};

export default install;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install);
    if ((install as any).installed) {
        install.installed = false;
    }
}
