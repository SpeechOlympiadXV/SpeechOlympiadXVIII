<script>
import AppHeroSection from "../components/AppHeroSection.vue";
import AppArticle from "../components/AppArticle.vue";
import ArticleInterview from "../components/ArticleInterview.vue";
import NiruthikaMid from "../assets/images/mid_img_niru.png"
import Niru_champ_story from "../assets/images/Niru_Champ_story.png"
import NiruthikaPortrait from "../assets/images/Niru_profile_img.png"

export default {
  data() {
    return {
      Niru_champ_story,
      NiruthikaMid,
      NiruthikaPortrait
    }
  },
  components: { AppArticle, AppHeroSection, ArticleInterview },
  computed: {
    isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    },
  },
};
</script>

<template>
  <main>

    <AppHeroSection :imagePath="Niru_champ_story">

    </AppHeroSection>

    <AppArticle>
      <p class="mt-3 first-letter">
        When I came to university, I initially had no prior experience in
        speech competitions. I aspired to be a better public speaker hence I
        decided to join the Gavel Club. Coincidentally, Speech Olympiad XIII was also
        happening around that time, so I took a leap of faith and registered to participate.
      </p>

      <p>
        I participated in Speech Olympiad XIII, and it didn't take me beyond the preliminary
        round. However, I didn't let that discourage me. Over the next year, I took small
        steps to improve my speaking skills. I tried delivering table topic speeches, participated
        in the Avurudhu speech competition and completed CC1. When Speech Olympiad XIV came around,
        I embarked on creating a fresh speech. That's when I had the privilege of being mentored by
        two incredible seniors, Gavelier Malindi and Gavelier Kasun. I can't thank them enough for their
        unwavering support.
      </p>

      <!-- <img
        class="article-img"
        alt=""
        :src="
          isMobile
            ? PathOfChampion_image1_mobile
            : PathOfChampion_image1_desktop
        "
        loading="lazy"
      /> -->


      <iframe class="yt" src="https://www.youtube.com/embed/AZHEQmR-nqI" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>


      <p>
        I constantly sought their guidance to refine my speech drafts and delivery.
        I also pestered them for assistance in sharpening my impromptu speaking skills.
        Their mentorship was invaluable, helping me polish my prepared speech and refine
        my ability to think on my feet while delivering impromptu speeches. Furthermore,
        the Speech Olympiad XIV team organized numerous insightful sessions to practice
        and develop our public speaking skills.
      </p>

      <p class="box">
        With the support of the Gavel family, I achieved what seemed impossible.
        <b><br />I became the Speech Olympiad XIV champion</b>.
      </p>

      <img class="article-img" :src="NiruthikaMid" loading="lazy" />

      <p>
        It wasn't just a competition; it was a transformative journey. This voyage from
        beginner to champion instilled immense confidence in my public speaking abilities.
        I learnt to connect better with the audience when delivering my speech. The techniques
        that I learnt to articulate my ideas clearly and convey them effectively, still prove very
        handy in my academic and professional life. I am profoundly grateful to Speech Olympiad for
        this enriching experience.

      </p>



      <ArticleInterview author-name="Chemini Mallikarachchi" interviewee-name="Niruththika Sritharan" compiledBy="0"
        :intervieweeImg="NiruthikaPortrait" />
    </AppArticle>
  </main>
</template>

<style>
/* Remove margin and padding from body and html elements */
body,
html {
  margin: 0;
  padding: 0;
}

/* Set the iframe width to 100% */
.yt {
  width: 100%;
  height: 500px;
}
</style>