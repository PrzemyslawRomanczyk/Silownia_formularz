<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <section>
        <div class="container">
          <div class="text-center">
            <h3 class="section-subheading-other">
              Validate your 3D model!
            </h3>
          </div>
          <b-img src="../assets/helpImage2.jpg" rounded fluid center></b-img>
          <div class="text-center">
            <p class="a-text desc-text">
              Use our online validator service to check if your project is ready
              to print!
            </p>
          </div>
          <div v-if="!this.$store.state.user.isLoggedIn" class="text-center">
            <b-button variant="light" class="btn-xl">
              <router-link to="/LoginPage">Validate your Project!</router-link>
            </b-button>
          </div>
          <div v-if="this.$store.state.user.isLoggedIn" id="container">
            <div>
              <b-form-file
                type="file"
                id="file"
                accept=".stl"
                ref="file"
                v-on:change="handleFileUpload()"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              >
              </b-form-file>
            </div>

            <div>
              <p id="fileName"></p>
            </div>

            <div>
              <b-button class="btn-xl" v-on:click="submitFile()">
                Send file to fixing
              </b-button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/
import Vue from "vue";
import axios from "axios";

Vue.use(axios);

export default Vue.extend({
  name: "Validator",
  data() {
    return {
      file: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("https://localhost:8080/File", formData, {
          body: JSON.stringify(this.file),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(function() {
          console.log("File was successfully loaded.");
          this.$router.replace({ name: "FileTransfer" });
        })
        .catch(function() {
          console.log("File upload failed.");
        });
    },
  },
});
</script>

<style>
.col-md-8 {
  padding: 20px;
  text-align: center;
}
</style>
