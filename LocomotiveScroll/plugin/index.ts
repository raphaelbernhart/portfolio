import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const install = (Vue: any) => {
  Vue.prototype.LocomotiveScroll = LocomotiveScroll
}

export default install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if ((install as any).installed) {
    install.installed = false
  }
}
