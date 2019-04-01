import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';
import "font-awesome/css/font-awesome.css";
import router from "./router";



Vue.use(BootstrapVue);
Vue.use(router);

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
