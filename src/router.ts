import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/HomePage.vue";
import Validator from "./components/Validator.vue";
import Repair from "./components/Repair.vue";
import ContactPage from "./components/Contact.vue";
import Login from "./components/Login.vue";
import User from "./components/Form.vue";
import Employee from "./components/Employee.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage
    },
    {
      path: "/Validator",
      name: "Validator",
      component: Validator 
    },
    {
      path: "/Repair",
      name: "Repair",
      component: Repair 
    },
    {
      path: "/Contact",
      name: "Contact",
      component: ContactPage 
    },
    {
      path: "/Login",
      name: "Login",
      component: Login 
    },
    {
      path: "/User",
      name: "User",
      component: User 
    },
    {
      path: "/Employee",
      name: "Employee",
      component: Employee 
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
