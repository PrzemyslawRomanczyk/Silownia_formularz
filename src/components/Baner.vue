<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="../assets/banner1.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/banner2.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/banner3.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/banner4.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="../assets/banner5.jpg"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Baner",
  data() {
    return {
      slide: 0,
      sliding: true,
    };
  },
  methods: {
    onSlideStart(slide: any) {
      this.sliding = true;
    },
    onSlideEnd(slide: any) {
      this.sliding = false;
    },
  },
});
</script>

<style scoped>
div {
  width: 100%;
}
</style>
