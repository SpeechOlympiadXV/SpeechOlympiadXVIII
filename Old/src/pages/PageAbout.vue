<script>
import AppArticle from "../components/AppArticle.vue";
import AppHeroSection from "../components/AppHeroSection.vue";
import About_title_mobile from "../assets/images/About_title_mobile.jpg"
import About_title_desktop from "../assets/images/About_title_desktop.jpg"

export default {
  data() {
    return {
      About_title_mobile,
      About_title_desktop
    }
  },
  components: { AppArticle, AppHeroSection },
  computed: {
    isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    },
  },
};
</script>

<template>
  <main>
    <AppHeroSection :imagePath="isMobile
      ? About_title_mobile
      : About_title_desktop
      ">
      <!-- <div class="hero-text">
        <h1>What is Speech Olympiad XV?</h1>
      </div> -->
    </AppHeroSection>
    <div>
      
    </div>
    <AppArticle>
      <p class="font-extralight text-justify pt-1">
        <span class="font-semibold text-xl text-[#EDC001] drop-shadow-3xl">Speech Olympiad</span> stands as the flagship occasion hosted by the Gavel Club of University of Moratuwa. 
        As the sole English language speech competition within the university, it garners participants from all 
        five faculties. Since its establishment in 2005, this event has progressively gained momentum, evolving 
        into one of the most highly anticipated phenomenon on the university calendar. In an era where effective 
        communication is paramount in any industry, The Speech Olympiad championship has become a coveted goal 
        pursued by all young undergraduates. The enthusiasm instilled by faculty members to engage their students 
        in this competition has led to a consistent rise in participation from all academic departments.
        While the Speech Olympiad championship certainly holds prestige, it transcends above a title. 
        It provides a platform for personal growth and the potential to ignite transformative change 
        not only within oneself but also among peers.
      </p>
      
      <p>
        <br/>
      </p>

      <p class="font-extralight text-justify">

  
        Throughout the span of the last 15 years, there has been a 
        consistent demonstration of the event’s ability to unveil hidden 
        talents within the university’s undergraduates. The recipients of awards 
        and those who reach the final stages encompass a broad spectrum of backgrounds, 
        highlighting the event’s widespread appeal through all academic disciplines. Countless  
        participants of Speech Olympiad have then proceeded to dominate the National and International 
        stages throughout the past decade, emerging as well-rounded impactful speakers who touch the hearts of many.

      </p>

      <!-- <p>
        Registrations for Speech Olympiad XV are open now, presenting you with
        the chance to spark a change, with your voice. Stand up for what you
        believe, break the silence, and redefine the power of words.
      </p> -->

      <img class="article-img" alt="" src="../assets/images/gallery/trophy_4.jpg" loading="lazy" />
    </AppArticle>
  </main>
</template>

<style scoped></style>
