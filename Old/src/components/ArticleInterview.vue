<template>
  <p>Words by</p>
  <div class="interviewee d-flex">
    <div class="interviewee-img">
      <img :src="intervieweeImg" alt="" loading="lazy" class="interviewee-img" />
    </div>
    <div class="interview-name">
      {{ intervieweeName }}
    </div>
  </div>

  <p v-if="compiledBy != '0'">Compiled by {{ authorName }}</p>
</template>
<script>
export default {
  name: "ArticleInterview",
  props: {
    authorName: String,
    intervieweeName: String,
    intervieweeImg: String,
    compiledBy: String,
  },
};
</script>
<style scoped>
.interviewee {
  align-items: center;
  padding: 0 1rem 1rem 0;
}

.interviewee-img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: grey;
}

.interview-name {
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .hero h4 {
    font-size: 1.25em;
  }
}
</style>