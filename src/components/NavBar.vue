<template>
  <div>
    <b-navbar toggleable="lg" variant="light" class="navbar">
        <b-nav is-nav-bar pills fill>
          <b-nav-item>
            <b-button variant="light">
              <router-link to="/">Main Page</router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light">
              <router-link to="/Validator">Validator 3D</router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light">
              <router-link to="/Reapir">Project Repair</router-link>
            </b-button>
          </b-nav-item>
          <b-nav-item>
            <b-button variant="light">
              <router-link to="/Contact">Contact</router-link>
            </b-button>
          </b-nav-item>
        </b-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <b-button variant="light">
                <em>Account</em>
              </b-button>
            </template>
            <b-dropdown-item>
              <router-link to="/User">My Account</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/">Logout</router-link>
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link to="/Login">Login</router-link>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavBar"
});
</script>

<style>
.navbar {
 opacity: 0.5;
}
</style>
