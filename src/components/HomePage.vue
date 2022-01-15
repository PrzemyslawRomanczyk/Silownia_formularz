<template>
      <div class="header__title">
        <h1>
          Tools to 
          <!-- Highlight effect -->
          <span class="highlight">prepare</span>
          your<br />
          <span class="highlight">models</span> for 3D Printing<br />
        </h1>
        <h4>Do not worry about printability issues anymore</h4>
        <button class="btn--text btn--scroll-to">Learn more &DownArrow;</button>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'HomePage',

})
</script>

<style>
  .header__title {
    flex: 1;
  
    max-width: 115rem;
    display: grid;
    grid-template-columns: 3fr 2fr;
    row-gap: 3rem;
    align-content: center;
    justify-content: center;
  
    align-items: start;
    justify-items: start;
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

  .btn--text {
    display: inline-block;
    background: none;
    font-size: 1.7rem;
    font-family: inherit;
    font-weight: 500;
    color: var(--color-primary);
    border: none;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .header__img {
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 1 / span 4;
    transform: translateY(-6rem);
  }


</style>