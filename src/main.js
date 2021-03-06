import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
