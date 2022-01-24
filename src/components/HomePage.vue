<template>
  <div class="row justify-content-md-center card-content">
    <div class="col-md-11 jumbotron jumb">
        <b-container class="header-title">
            <b-row>
                <h1>
                Tools to 
                <!-- Highlight effect -->
                <span class="highlight">prepare</span>
                your<br />
                <span class="highlight">models</span> for 3D Printing<br />
                </h1>
            </b-row>
            <b-row>
                <h4>Do not worry about printability issues anymore</h4>
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
  name: "HomePage"
});
</script>

<style>
  .label {
    color: black;
    text-justify: auto;
  }
  .card-content {
    padding-top: 2rem;
    background: rgba(255,255,255,0.0)
  }

    h1 {
    font-size: 5.5rem;
    line-height: 1.35;
  }

    h4 {
    font-size: 2.4rem;
    font-weight: 500;
  }

    .highlight {
    position: relative;
    opacity: 1;
  }

    .highlight::after {
    display: block;
    content: '';
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
      background: rgba(255,255,255,0.5);
  }
  
</style>
