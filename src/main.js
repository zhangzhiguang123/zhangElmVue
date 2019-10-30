import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";
import router from "./router/index";
import App from './App.vue';
import "./common/css/reset.css";
import echarts from "echarts"
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(VueRouter);
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
