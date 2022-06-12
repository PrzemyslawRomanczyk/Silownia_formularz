<template>
  <div>
    <b-navbar toggleable="lg" variant="light" class="navbar">
      <b-nav is-nav-bar pills fill>
        <b-nav-item>
          <b-button variant="light" class="btn-xl">
            <router-link to="/">Main Page</router-link>
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button variant="light" class="btn-xl">
            <router-link to="/Validator">Validator 3D</router-link>
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button variant="light" class="btn-xl">
            <router-link to="/Repair">Project Repair</router-link>
          </b-button>
        </b-nav-item>
        <b-nav-item>
          <b-button variant="light" class="btn-xl">
            <router-link to="/Contact">Contact</router-link>
          </b-button>
        </b-nav-item>
      </b-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template #button-content>
            <b-button variant="light" class="btn-xl">
              <em>Account</em>
            </b-button>
          </template>
          <b-dropdown-item
            v-if="this.$store.state.user.isLoggedIn"
            class="btn-xl"
          >
            <router-link to="/UserDashboard">My Account</router-link>
          </b-dropdown-item>
          <b-dropdown-item
            v-if="this.$store.state.user.isLoggedIn"
            class="btn-xl"
            v-on:click="signOut()"
          >
            Logout
          </b-dropdown-item>
          <b-dropdown-item
            v-if="!this.$store.state.user.isLoggedIn"
            class="btn-xl"
          >
            <router-link to="/LoginPage">Login</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "NavBar",
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        });
    },
  },
});
</script>

<style>
#mainNav .navbar-nav .nav-item .nav-link {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.95rem;
  color: #fff;
  letter-spacing: 0.0625em;
}
#mainNav .navbar-nav .nav-item .nav-link.active,
#mainNav .navbar-nav .nav-item .nav-link:hover {
  color: #ffc800;
}
</style>
