<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-8 jumbotron">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Login:" label-for="input-1" class="label">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="email"
            required
            placeholder="Enter your email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Password:"
          label-for="input-2"
          class="label"
        >
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.surname"
            required
            placeholder="Enter your surname"
          ></b-form-input>
        </b-form-group>


        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase";
import { db } from "../db";


export default Vue.extend({
  name: "Form",
  data() {
    return {
      form: {
        name: "",
        surname: "",
        email: "",
        sex: null
      },
      sex: [
        { text: "Select One", value: null },
        "Male",
        "Female",
        "Dont want to say"
      ],
      show: true,
      state: "loading",
      errorMessage: ""
    };
  },
  methods: {
    async onSubmit(evt: MouseEvent): Promise<void> {
      evt.preventDefault();
      try {
        await db.collection("uzytkownicy").add({
          name: this.form.name,
          surname: this.form.surname,
          email: this.form.email,
          sex: this.form.sex,
          createdDate: this.generateTimeTag()
        });
        this.state = "synced";
      } catch (error) {
        this.errorMessage = JSON.stringify(error);
        this.state = "error";
      }
      this.$router.push({ name: "FormFinished" });
    },
    onReset(evt: MouseEvent): void {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.surname = "";
      this.form.email = "";
      this.form.sex = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    generateTimeTag(): Date {
      return new Date();
    }
  }
});
</script>

<style>
  .label {
    color: black;
    text-justify: auto;
  }
  .card-content {
    padding-top: 2rem;
  }
</style>
