<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">Register</div>
              <div class="card-body">
                <div v-if="error" class="alert alert-danger">{{ error }}</div>
                <form action="#" @submit.prevent="submit">
                  <div class="form-group row">
                    <label
                      for="name"
                      class="col-md-4 col-form-label text-md-right"
                      >Name</label
                    >

                    <div class="col-md-6">
                      <input
                        id="name"
                        type="name"
                        class="form-control"
                        name="name"
                        value
                        required
                        autofocus
                        v-model="form.name"
                      />
                    </div>
                  </div>

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

                  <div class="form-group row mb-0">
                    <div class="col-md-8 offset-md-4">
                      <b-button type="submit" variant="light" class="btn-xl">
                        Register
                      </b-button>
                    </div>
                  </div>
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
import { db } from "../db";

export default Vue.extend({
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  firestore: {
    documents: db.collection("documents"),
  },

  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then();
          this.$router.replace({ name: "AfterRegister" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
});
</script>
