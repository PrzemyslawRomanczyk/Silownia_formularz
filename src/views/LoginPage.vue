<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-8 jumbotron">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card container">
              <div class="card-header">Login to your account</div>
              <div class="card-body">
                <div v-if="error" class="alert alert-danger">{{ error }}</div>
                <form action="#" @submit.prevent="submit">
                  <div class="form-group row">
                    <label
                      for="email"
                      class="col-md-4 col-form-label text-md-right"
                      >Email</label
                    >

                    <div class="col-md-6">
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        value
                        required
                        autofocus
                        v-model="form.email"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="password"
                      class="col-md-4 col-form-label text-md-right"
                      >Password</label
                    >

                    <div class="col-md-6">
                      <input
                        id="password"
                        type="password"
                        class="form-control"
                        name="password"
                        required
                        v-model="form.password"
                      />
                    </div>
                  </div>

                  <b-row>
                    <b-col>
                      <b-button type="submit" variant="light" class="btn-xl">
                        Login
                      </b-button>
                    </b-col>
                    <b-col>
                      <b-button variant="light" class="btn-xl">
                        <router-link to="/Register">New user</router-link>
                      </b-button>
                    </b-col>
                  </b-row>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "LoginPage",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.$store.dispatch("fetchUser", data);
          this.$router.replace({ name: "Home" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
});
</script>

<style></style>
