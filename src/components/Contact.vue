<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
        <b-container>
          <b-row>
            <h2 class="title">Here is our team</h2>
          </b-row>
          <b-row>
            <b-col>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item img-local">
                      <img
                        src= "../assets/userImage2.jpg"
                        alt="Thumbnail Image"
                        class="rounded-circle"
                      />
                    </div>
                    <h4 class="card-title">
                      Przemysław Romańczyk-Thrams
                      <br />
                      <small class="card-description text-muted">Software Developer</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                          description
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </b-col>
            <b-col>
               <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-33 mx-auto img-local">
                      <img
                        src= "../assets/userImage1.jpg"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Marcin Polak 
                      <br />
                      <small class="card-description text-muted"
                        >3D Artist</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        description
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
    </div>
    <div class="col-md-11 jumbotron jumb">
        
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact"
});
</script>

<style>
.col-md-8 {
  padding: 20px;
  text-align: center;
}
h2 {
  align-content: center;
  justify-content: center;
}
.img-local {
  opacity: 1;
  size: 1rem;
}

.content-local {
  background: rgb(255, 255, 255);
}
</style>
