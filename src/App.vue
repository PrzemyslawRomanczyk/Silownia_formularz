<template>
  <b-container fluid="xl" class="container">
    <b-row>
      <Baner></Baner>
    </b-row>
    <b-row>
      <b-col><NavBar></NavBar></b-col>
    </b-row>
    <b-row>
      <b-col><router-view></router-view></b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import ListOfUsers from "./components/ListOfUsers.vue";
import Baner from "./components/Baner.vue";
import NavBar from "./components/NavBar.vue";
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from "bootstrap-vue";
import * as firebase from "firebase";
import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);
Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
    Baner
  }
});
</script>

<style>

</style>
