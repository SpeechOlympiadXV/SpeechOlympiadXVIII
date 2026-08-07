<template>
  <div class="hero">
    <slot></slot>
    <img class="hero-img" :src="imagePath" alt="" loading="lazy" />
  </div>
</template>
<script>
export default {
  name: "AppHeroSection",
  props: {
    heading: String,
    subHeading: String,
    imagePath: String,
    imageMobile: String
  }
};
</script>
<style>
.lb-phone {
  display: none;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: var(--vt-c-white);
}
.hero {
  text-align: center;
}
.hero-img {
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 450px;
}
@media (max-width: 768px) {
  .hero-text h4 {
    font-size: 1.125em;
  }
  .lb-phone {
    display: block;
  }
  .hero-text {
    top: 25%;
    left: 1%;
    right: 1%;
    transform: translate(0, -50%);
  }
  .hero-img {
    width: 100%;
    height: auto;
  }
}
</style>