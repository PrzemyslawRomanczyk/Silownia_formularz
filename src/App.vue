<template>
  <b-container fluid="lg">
    <b-row>
      <Baner></Baner>
    </b-row>
    <b-row>
      <b-col><NavBar></NavBar></b-col>
    </b-row>
    <b-row>
      <b-col><router-view></router-view></b-col>
      <b-col cols="3"><ListOfUsers></ListOfUsers></b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Form from "./components/Form.vue";
import ListOfUsers from "./components/ListOfUsers.vue";
import Baner from "./components/Baner.vue";
import HomePage from "./components/HomePage.vue";
import NavBar from "./components/NavBar.vue";
import Vue from "vue";
import { component } from "vue/types/umd";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import * as firebase from 'firebase';
import {firestorePlugin} from 'vuefire';
import VueRouter from 'vue-router'
Vue.use(firestorePlugin);

export default Vue.extend({
  name: "App",
  components: {
    ListOfUsers,
    NavBar,
    Baner
  }
});
</script>
