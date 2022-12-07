import App from './App'
import zpMixins from '@/uni_modules/zp-mixins/index.js'

// #ifndef VUE3
import Vue from 'vue'

Vue.use(zpMixins)

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.mixin(zpMixins)
  return {
    app
  }
}
// #endif