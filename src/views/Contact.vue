<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <b-container class="container">
        <b-row class="text-center cont-div">
          <h2 class="section-subheading-other text-uppercase">
            Here is our team
          </h2>
        </b-row>
        <b-row>
          <b-col class="col-md-6">
            <b-row class="cont-div">
              <div>
                <b-img
                  src="../assets/userImage2.jpg"
                  alt="team image 1"
                  center
                  rounded="circle"
                />
              </div>
            </b-row>
            <b-row class="cont-div">
              <h4 class="text-center">
                Przemysław Romańczyk-Thrams
                <br />
                <small>Software Developer</small>
              </h4>
            </b-row>
            <b-row class="cont-div">
              <div>
                <p class="a-text-2">
                  Software development enthusiast with broad experience in
                  software development and testing.
                </p>
              </div>
            </b-row>
          </b-col>
          <b-col class="col-md-6">
            <div>
              <b-row class="cont-div">
                <div>
                  <b-img
                    src="../assets/userImage1.jpg"
                    alt="team image 2"
                    center
                    rounded="circle"
                  />
                </div>
              </b-row>
              <b-row class="cont-div">
                <h4 class="text-center">
                  Marcin Polak
                  <br />
                  <small>3D Artist</small>
                </h4>
              </b-row>
              <b-row class="cont-div">
                <div>
                  <p class="a-text-2">
                    3D modeling artist with experience in game dev.
                  </p>
                </div>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",
});
</script>

<style>
.cont-div {
  display: flex;
  justify-content: center;
}

.a-text-2 {
  font-size: 1.15rem;
  justify-self: center;
  text-align: center;
}
</style>
