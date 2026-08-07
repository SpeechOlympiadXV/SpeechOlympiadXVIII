<template>
  <div class="row featurette">
    <div :class="'col-md-7 ' + getOrder(index, 0)">
      <h2 class="featurette-heading">
        <div class="nav-link">{{ heading }} <span class="text-muted">{{ headingEnd }}</span></div>
      </h2>
      <p class="lead">{{ text }}</p>
      <div><a class="read-more btn btn-secondary bg-amber-600 hover:bg-amber-700 mb-3" :href="urlString">Read more</a>
      </div>
    </div>
    <div :class="'col-md-5 ' + getOrder(index, 1)">
      <img class="
          bd-placeholder-img bd-placeholder-img-lg
          featurette-image
          img-fluid
          mx-auto
          w-1/2
        " :src="image" alt="" loading="lazy">
    </div>
  </div>
  <hr class="featurette-divider" />
</template>

<script>
export default {
  name: "AppFeaturette",
  props: {
    index: Number,
    heading: String,
    headingEnd: String,
    text: String,
    image: String,
    urlString: String,
  },
  methods: {
    getOrder(rowIndex, colIndex) {
      if (
        (rowIndex % 2 === 0 && colIndex === 0) ||
        (rowIndex % 2 === 1 && colIndex === 1)
      ) {
        return "order-md-first";
      } else {
        return "order-md-last";
      }
    },
  },
};
</script>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.read-more {
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

h2 {
  font-weight: 400;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0;
  /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  font-weight: bold;
  /* rtl:remove */
  letter-spacing: -0.05rem;
  font-size: 30px;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

@media (max-width: 62em) {
  .featurette-heading {
    padding-top: 2rem;
  }

  .featurette-divider {
    margin: 2rem 0;
  }
}
</style>