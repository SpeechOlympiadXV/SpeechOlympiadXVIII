<script>
import AppHeroSection from "../components/AppHeroSection.vue";
import AppArticle from "../components/AppArticle.vue";
import ArticleInterview from "../components/ArticleInterview.vue";
import yasirPortrait from "../assets/images/PathOfChampion_portrait.jpg"
import yasir_image_desktop from "../assets/images/yasir_tech_tip.png"
import yasir_image_mobile from "../assets/images/yasir mobile.png"
import yasir_mid from "../assets/images/yasir_mid.png"

export default {
  data() {
    return {
    
      yasirPortrait,
      yasir_image_desktop,
      yasir_image_mobile,
      yasir_mid
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

    
    <AppHeroSection
      :imagePath="
        isMobile
          ? yasir_image_mobile
          : yasir_image_desktop
      "
    >

    </AppHeroSection>

    <AppArticle>
      <p class="mt-3 first-letter">
        On the 19th of September 2023, at 5:50 PM, a virtual Speech Crafting session was held via the Zoom platform. 
        This session, aimed to impart insights into the art of crafting captivating content for speeches, featured 
        Distinguished Toastmaster Mohamed Yasir, an outstanding public speaker and an alumnus of Gavel Club of University
         of Moratuwa. He shared his extraordinary journey, recounting how he progressed from being a novice speaker to 
         achieving the prestigious title of Speech Olympiad VIII Champion.
      </p>

      <p>
        During his presentation, Toastmaster Yasir offered a set of valuable recommendations to harness the full potential
         of a winning speech as mentioned below:
      </p>


      <!-- <iframe class="yt" src="https://www.youtube.com/embed/AZHEQmR-nqI"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe> -->
      <p class="box">
        <strong>Never say no to any opportunity:</strong>  It can be a presentation, speech or even a table topic. The more you participate,
        you can start to feel a positive change in your public speaking skills.
      </p>
      <b><br /></b>
      <p class="box">
        <strong>Focus on the content :</strong>  Even if we are good at delivering speeches with suitable gestures and voice variations, a key 
        role is played by the content of the speech. Content is what carries the core idea of your message to the audience 
        (An allocation of 50 marks).
      </p>
      <b><br /></b>
      <p class="box">
        <strong>Balance an expressive delivery and avoid overdoing it:</strong>  Don't use excessive facial expressions, vocal variations,
         or unnecessary drama, but small, well-timed dramatic elements to highlight key points, and create memorable moments
          to keep your audience engaged.
      </p>
      
      <iframe class="yt" src="https://www.youtube.com/embed/NqqDsnBvuuI?si=XHg1VdoGyX13IUip"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
        <b><br /></b>
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


      <p>
        You might face difficulty in finding suitable content, but you can even find a quote and weave a story around it. 
        It doesn't have to be a real story; you can always craft a story that goes well with the quote and make sure the 
        problem addressed in the speech is strong enough. You can speak on anything you want to tell the world.
      </p>



      <p>
        A few techniques that could be incorporated into our speeches were mentioned by Toastmaster Yasir in the session 
        as well.

      </p>
      <p class="box">
        <strong>​Symbolism</strong> is used in speeches to express a hidden meaning. Toastmaster Yasir gave a brilliant example of how you 
        can use the phrase "The present is a present", which means "The present is a gift".
      </p>
      <b><br /></b>

      <p class="box">
        <strong>360-degree approach:</strong> This method involves crafting speeches where the opening and ending are about the same place
         or incident. Imagine starting with a particular incident, journeying through transformations, and then returning to that same 
         incident, offering fresh insight or resolution. This technique not only completes the narrative circle but creates a great impact
          on the audience.
      </p>
      <b><br /></b>
      <p class="box">
        <strong>Strategic use of questions:</strong> When your speech gives rise to questions to the audience during the speech, it increases
         the curiosity of the audience and gains attention. However, the key to this technique's success lies in ensuring that you answer 
         those questions before you conclude the speech.
      </p>
      <b><br /></b>

      <img
        class="article-img"
        :src="yasir_mid"
        loading="lazy"
      />
      <p>
        You can always enhance your speeches by seeking guidance from a mentor, sharing the speeches with diverse audiences, and following the 
        feedback after analyzing it properly instead of blindly believing it. Toastmaster Yasir encouraged all the participants to never let 
        go of an opportunity to deliver a speech for the more you do so, the more skilled you’ll be at crafting speeches.
      </p>

      <p>
        By implementing these strategies and incorporating these tips, we can become more proficient in expressing our thoughts and ideas, 
        ultimately leading to greater success in public speaking.
      </p>

      <ArticleInterview
        author-name="Renulucshmi Prakasan"
        interviewee-name="Mohamed Yasir"
        :intervieweeImg="yasirPortrait"
      />
    </AppArticle>
  </main>
</template>

<style>
/* Remove margin and padding from body and html elements */
body, html {
    margin: 0;
    padding: 0;
}

/* Set the iframe width to 100% */
.yt {
    width: 100%;
    height: 500px;
}
</style>