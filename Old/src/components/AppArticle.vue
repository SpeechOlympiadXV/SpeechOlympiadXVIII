<template>
  <div class="container-fluid article-container rounded-2xl p-9 md:p-14 mt-9 mb-9">
    <div class="article column pb-2">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppArticle",
};
</script>
<style>
/*Since the content is defined in parent components style is not scoped*/
.article-container {
  display: flex;
  width: 90%;
  background: linear-gradient(45deg, #282828 , #EDC00111);
  justify-content: center;
  border : 1px solid #585858;
}

.article {
  font-size: 1.125rem;
}
.article-img {
  width: 100%;
  height: auto;
  object-fit: cover;
  background-color: grey;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.box {
  background-color: var(--color-background-mute);
  padding: 1rem;
  text-align: left;
  font-style: italic;
}

.first-letter::first-letter {
  font-size: 250%;
  line-height: 100%;
}

@media (min-width: 768px) {
  .article {
    width: 100%;
  }

  .article-container {
    width: 80%;
  }
  
  .hero h4 {
    font-size: 1.25em;
  }

  .article-img-resize {
    width: 50%;
    margin-left: 25%;
  }
}
</style>