<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <section>
        <div class="container">
          <div class="text-center">
            <h3 class="section-subheading-other">
              Repair your project file
            </h3>
          </div>
          <b-img src="../assets/helpImage.jpg" rounded fluid center></b-img>
          <div class="text-center">
            <p class="a-text desc-text">
              Use our automated services to repair your project. If you are not
              satisfied with our auto-repair result you can always send your
              project to one of our employees for manual fixing.
            </p>
          </div>
          <div v-if="!this.$store.state.user.isLoggedIn" class="text-center">
            <b-button variant="light" class="btn-xl">
              <router-link to="/LoginPage">Repair your project!</router-link>
            </b-button>
          </div>
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
  name: "Repair",
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
          this.$store.dispatch("fetchUser", true);
          this.$router.replace({ name: "FileTransfer" });
        })
        .catch(function() {
          this.$store.dispatch("fetchUser", false);
          console.log("File upload failed.");
          this.$router.replace({ name: "FileTransfer" });
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

.section-subheading-other {
  margin-top: 0rem;
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

.desc-text {
  font-size: 2rem;
  padding: 2rem;
  color: azure;
}

.btn-xl {
  padding: 1.25rem 2rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 500;
}
</style>
