<template>
  <div class="card testimonial-card mb-3 md-lg-0">
    <div class="row mt-3">
      <div class="col d-flex justify-content-center my-4">
        <!-- <svg
          class="rounded-circle"
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 200x200"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#777" />
          <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
        </svg> -->
        <img alt="" :src="imageSrc" class="testimonial-card-img" loading="lazy">
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title text-left testimonial-card-heading">
        {{ this.title }}
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ this.subtitle }}</h6>
      <p class="card-text text-left testimonial-card-body">"{{ this.body }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    imageSrc: String,
    title: String,
    subtitle: String,
    body: String,
  },
};
</script>

<style scoped>
/*Testimonial Card*/
.testimonial-card {
  background-color: var(--color-background-transparent);
  border: solid 1px var(--color-border-hover);
}
.testimonial-card-heading {
  color: var(--color-heading);
}
.testimonial-card-body {
  color: var(--color-text);
}
.testimonial-card-img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}

/*Testimonial Card end*/
</style>