import Vue from 'vue'
import Letterize from 'letterizejs'

declare module 'vue/types/vue' {
    interface Vue {
        $letterize(options: any): void
    }
}

Vue.prototype.$letterize = (options: any) => new Letterize(options)