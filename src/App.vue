<template>
  <div id="app">
    <Form></Form>
    <ListOfUsers></ListOfUsers>
    <Baner></Baner>
  </div>
</template>

<script lang="ts">
import Form from './components/Form.vue';
import ListOfUsers from './components/ListOfUsers.vue';
import Baner from './components/Baner.vue';
import Vue from 'vue';
import { component } from 'vue/types/umd';
export default Vue.extend({
  name: 'App',
  components : {
    Form,
    ListOfUsers,
    Baner
  }
})
</script>