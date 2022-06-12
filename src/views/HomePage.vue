<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
      <section class="page-section" id="services">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">
              <img class="hero_img" src="../assets/hero_small.png" />
              STL Fixer
            </h2>
            <h3 class="section-subheading">
              Fix your .stl project for 3d Printing
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Online</h4>
              <p class="a-text">
                Online service available whenever you want! You don’t need to
                install any additional software.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-gauge-high fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Easy to use</h4>
              <p class="a-text">
                Easy to use, you just need to upload your file with .stl project
                and wait for report with analysis.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-life-ring fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">Proffesional Help</h4>
              <p class="a-text">
                If you are not satisified with our automated service you can ask
                one of our experts for help with your project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",
});
</script>

<style>
.label {
  color: black;
  text-justify: auto;
}
.card-content {
  padding-top: 2rem;
  background: rgba(255, 255, 255, 0);
}

.highlight {
  position: relative;
  opacity: 1;
}

.highlight::after {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.7;
  transform: scale(1.07, 1.05) skewX(-15deg);
  background-image: var(--gradient-primary);
}
.header-title {
  align-content: center;
  justify-content: center;
}

.jumb {
  background: rgba(255, 255, 255, 0.5);
}

.page-section {
  padding: 2rem 0;
}

.section-heading {
  font-size: 5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: azure;
  justify-self: center;
}
.section-subheading {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

.my-3 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.a-text {
  font-size: 1.25rem;
}

.hero_img {
  vertical-align: middle;
}

.text-center {
  text-align: center !important;
}

.container {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}

.justify-content-md-center {
  justify-content: center !important;
}
</style>
