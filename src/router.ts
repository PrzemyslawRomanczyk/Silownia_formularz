import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import Validator from "./views/Validator.vue";
import Repair from "./views/Repair.vue";
import ContactPage from "./views/Contact.vue";
import LoginPage from "./views/LoginPage.vue";
import Register from "./views/Register.vue";
import AfterRegister from "./views/AfterRegister.vue";
import UserDashboard from "./views/UserDashboard.vue";
import FileTransfer from "./views/FileTransfer.vue";

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
      path: "/LoginPage",
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: "/UserDashboard",
      name: "UserDashboard",
      component: UserDashboard 
    },
    {
      path: "/Register",
      name: "Register",
      component: Register 
    },
    {
      path: "/AfterRegister",
      name: "AfterRegister",
      component: AfterRegister 
    },
    {
      path: "/FileTransfer",
      name: "FileTransfer",
      component: FileTransfer 
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
