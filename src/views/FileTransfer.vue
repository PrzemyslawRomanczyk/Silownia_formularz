<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <section>
        <div class="container">
          <div class="text-center">
            <h3
              v-if="this.$store.state.fileTransferSuccess"
              class="section-subheading-other"
            >
              Your file was transfered successfully!
            </h3>
            <h3
              v-if="!this.$store.state.fileTransferSuccess"
              class="section-subheading-other"
            >
              Your file upload failed!
            </h3>
          </div>
          <b-img src="../assets/helpImage3.jpg" rounded fluid center></b-img>
          <div class="text-center">
            <b-row class="row-btn">
              <b-col v-if="this.$store.state.fileTransferSuccess">
                <p class="a-text desc-text">
                  You can check status of your file in user dashboard
                </p>
                <b-button variant="light" class="btn-xl">
                  <router-link to="/UserDashboard"
                    >Go to Dashboard!</router-link
                  >
                </b-button>
              </b-col>
              <b-col v-if="!this.$store.state.fileTransferSuccess">
                <p class="a-text desc-text">
                  Go to file loading page and try again!
                </p>
                <b-row>
                  <b-col>
                    <b-button variant="light" class="btn-xl">
                      <router-link to="/Validator"
                        >Go to Validation Page</router-link
                      >
                    </b-button>
                  </b-col>
                  <b-col>
                    <b-button variant="light" class="btn-xl">
                      <router-link to="/Repair">Go to Repair Page</router-link>
                    </b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "FileTransfer",
});
</script>

<style>
.row-btn {
  padding: 1rem;
}
</style>
