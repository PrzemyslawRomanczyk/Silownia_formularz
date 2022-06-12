<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <section>
        <div class="container">
          <div class="text-center">
            <h3 class="section-subheading-other">
              Thank you for registering in our service!
            </h3>
          </div>
          <b-img src="../assets/helpImage3.jpg" rounded fluid center></b-img>
          <div class="text-center">
            <b-row class="row-btn">
              <b-col>
                <b-button variant="light" class="btn-xl">
                  <router-link to="/">Home Page</router-link>
                </b-button>
              </b-col>
              <b-col>
                <b-button variant="light" class="btn-xl">
                  <router-link to="/Login">Login</router-link>
                </b-button>
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
  name: "AfterRegister",
});
</script>

<style>
.row-btn {
  padding: 1rem;
}
</style>
