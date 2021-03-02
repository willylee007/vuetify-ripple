import Vue from 'vue';
import App from './App.vue';

// import Ripple from './directive/index'
import Ripple from 'vuetify-ripple';

Vue.config.productionTip = false;
Vue.directive('ripple', Ripple);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
