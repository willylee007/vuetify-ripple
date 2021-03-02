import Vue from 'vue';
import App from './App.vue';
import Ripple from './directive/index';
Vue.config.productionTip = false;
Vue.directive('ripple', Ripple);
new Vue({
    render: function (h) { return h(App); },
}).$mount('#app');
