import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify';
import FakeAuthService from './_services/fake-auth.service';

Vue.config.productionTip = false;
Vue.use(Vuetify);

// start the fake auth service
const fakeAuthService = new FakeAuthService();
fakeAuthService.init();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');