<template>
  <div class="col-md-8">
      <b-container>
          Hello there!
          <br>
          <router-link to="/form"> Register to our gym</router-link>
      </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'HomePage',

})
</script>

<style>
  .col-md-8{
    padding: 20px;
    text-align: center
  }
</style>