<template>
  <div class="col-md-4">
    New registered users:
    <ul>
      <li  v-for="user of usersData" :key="user['.key']">
        {{user.id}} <br>
        {{user.name}} <br>
        {{user.email}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from 'firebase';
import {db} from '../db'

export default Vue.extend({
  name: "ListOfUsers",
  data() {
    return {
      usersData: [],
    }
  },
  firestore: {
    usersData: db.collection('uzytkownicy').orderBy('createdDate', 'desc').limit(3)

  },
  methods: {

  }
});
</script>

<style lang="sass"></style>
