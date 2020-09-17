import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import {firestorePlugin} from "vuefire";
import VueRouter from "vue-router";
import Form from "./components/Form.vue";
import FormFinished from "./components/FormFinished.vue";
import HomePage from "./components/HomePage.vue";
Vue.use(firestorePlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {path: '/form', component: Form},
    {path: '/form/finished', component: FormFinished, name: 'FormFinished'},
    {path: '', component: HomePage, name: 'HomePage'}
  ]
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
