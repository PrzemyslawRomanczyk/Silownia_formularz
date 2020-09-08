<template>
  <div id="app" class="container">
    <Baner></Baner>
    <div class="row">
      <Form></Form>
      <ListOfUsers></ListOfUsers>
    </div>
  </div>
</template>

<script lang="ts">
import Form from "./components/Form.vue";
import ListOfUsers from "./components/ListOfUsers.vue";
import Baner from "./components/Baner.vue";
import Vue from "vue";
import { component } from "vue/types/umd";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import * as firebase from 'firebase';
import {firestorePlugin} from 'vuefire';
Vue.use(firestorePlugin);

export default Vue.extend({
  name: "App",
  components: {
    Form,
    ListOfUsers,
    Baner
  }
  // methods: {
  //   initializeDb(): void {
  //     firebase.initializeApp(firebaseConfig);
  //   }
  //}
});
</script>
