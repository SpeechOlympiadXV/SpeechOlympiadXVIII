<script>
import HomePage_carousel1_mobile from "../assets/images/HomePage_carousel1_mobile.jpg"
import HomePage_carousel1_desktop from "../assets/images/HomePage_carousel1_desktop.jpg"
import HomePage_carousel2_mobile from "../assets/images/HomePage_carousel2_mobile.jpg"
import HomePage_carousel2_desktop from "../assets/images/HomePage_carousel2_desktop.jpg"
import HomePage_carousel3_mobile from "../assets/images/HomePage_carousel3_mobile.jpg"
import HomePage_carousel3_desktop from "../assets/images/carousel_image_new.jpg"


export default {
  data() {
    return {
      HomePage_carousel1_mobile,
      HomePage_carousel1_desktop,
      HomePage_carousel2_mobile,
      HomePage_carousel2_desktop,
      HomePage_carousel3_mobile,
      HomePage_carousel3_desktop
    }
  },
  computed: {
    isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    },
  },
};
</script>


<template>
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          :src="
            isMobile
              ? HomePage_carousel1_mobile
              : HomePage_carousel1_desktop
          "
          alt=""
          aria-hidden="true"
          loading="eager"
        />
      </div>

      <div class="carousel-item">
        <img
          :src="
            isMobile
              ? HomePage_carousel2_mobile
              : HomePage_carousel2_desktop
          "
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div class="carousel-item">
        <img
          :src="
            isMobile
              ? HomePage_carousel3_mobile
              : HomePage_carousel3_desktop
          "
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</template>

<style scoped>
/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  object-fit: cover;
  min-width: 100%;
  height: 30rem;
  z-index: -1;
}

@media (max-width: 62em) {
  .carousel {
    margin-bottom: 0;
  }

  .carousel-item {
    height: 100%;
    width: 100%;
  }
  .carousel-item > img {
    height: 100%;
    width: 100%;
  }
}

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }
}
</style>