<script>
import AppHeroSection from "../components/AppHeroSection.vue";
import AppArticle from "../components/AppArticle.vue";
import ArticleInterview from "../components/ArticleInterview.vue";
import PathOfChampion_title_mobile from "../assets/images/Champion's_story.png"
import PathOfChampion_title_desktop from "../assets/images/Champion's_story.png"

import PathOfChampion_image1_mobile from "../assets/images/PathOfChampion_image1_mobile.jpg"
import PathOfChampion_image1_desktop from "../assets/images/PathOfChampion_image1_desktop.jpg"
import PathOfChampion_image2_mobile from "../assets/images/PathOfChampion_image2_mobile.jpg"
import PathOfChampion_image2_desktop from "../assets/images/PathOfChampion_image2_desktop.jpg"
import PathOfChampion_portrait from "../assets/images/PathOfChampion_portrait.jpg"

export default {
  data() {
    return {
      PathOfChampion_title_mobile,
      PathOfChampion_title_desktop,
      PathOfChampion_image1_mobile,
      PathOfChampion_image1_desktop,
      PathOfChampion_image2_mobile,
      PathOfChampion_image2_desktop,
      PathOfChampion_portrait
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
          ? PathOfChampion_title_mobile
          : PathOfChampion_title_desktop
      "
    >

    </AppHeroSection>

    <AppArticle>
      <p class="mt-3 first-letter">
        Walking the journey through the shadows of my past, during my school
        days, just like most students, I was always reluctant to opt in speech
        contests. Perturbed by the fear of failure and embarrassment, I never
        wanted to perform before an audience. I remember being forced to do a
        speech in grade 11 at the assembly which surprisingly turned out well.
        That was when I realized that I had a potential towards public speaking.
        Thus, I started my public speaking journey. Following this, I grabbed a
        few chances to compere at school functions and gradually established
        myself as a decent public speaker.
      </p>

      <p>
        I geared my public speaking drive during the twilight of my school
        career, but I did not have many opportunities to explore. Right from the
        moment I joined university, I told the inner me that I am going to try
        as many extracurricular activities as possible. Taking part in a speech
        contest was the ultimate challenge since delivering a speech under
        pressure was a monumental task. The very minute I stepped into my
        university life, I eagerly joined Speech Olympiad, embarking on a quest
        to expand my comfort zone.
      </p>

      <img
        class="article-img"
        alt=""
        :src="
          isMobile
            ? PathOfChampion_image1_mobile
            : PathOfChampion_image1_desktop
        "
        loading="lazy"
      />

      <p>
        I was excited for my very first experience at Speech Olympiad which was
        also the first speech contest I took part in. I was, however,
        under-prepared with a very short speech lasting merely 2 minutes, not to
        mention getting tongue-tied somewhere mid-speech as well.
      </p>
      <p>
        Leaving the hall, I realized that I needed help from someone who was
        experienced and proficient in public speaking, which was my driving
        intention to join the Gavel Club.
      </p>
      <p>
        The following year was all about learning the basics of public speaking,
        getting the exposure and being mentored by senior Gaveliers. With their
        guidance, I came up with a solid speech for the following Speech
        Olympiad, and with a huge effort put in from my end, I emerged as the
        <b>first runner-up</b>.
      </p>
      <img
        class="article-img"
        :src="
          isMobile
            ? PathOfChampion_image2_mobile
            : PathOfChampion_image2_desktop
        "
        loading="lazy"
      />
      <p>
        Motivated by the success of that year’s competition, I wanted to compete
        in the upcoming competition as well. But along with being a past winner
        and the experience gained through Gavel, I became overconfident in
        myself and my abilities. I prioritized other commitments over Speech
        Olympiad practices and mentoring sessions with the belief that I would
        be able to manage on my own. It was only after emerging second runner-up
        that year, I realized the fault in my approach.
      </p>

      <p>
        The final Speech Olympiad during my undergraduate life was the last shot
        at giving my best. I went back to square one and started my journey once
        again. This time, I reinforced myself with past Gavel experiences along
        with the understanding that I will always be able to improve with
        others' help.
      </p>

      <p class="box">
        Similar to my second Speech Olympiad experience, I worked hard,
        carefully focusing on the specifics such as time management and coming
        up with the best approach for table topics while sharpening my speaking
        skills and refining my speech with the help of practice and impactful
        mentoring sessions; which finally made me the
        <b><br />Champion of Speech Olympiad VIII in 2014</b>.
      </p>

      <p>
        The surreal moment when I emerged as the champion is something I will
        cherish forever! I will never forget the warm big proud smiles my
        parents, friends and my Gavel family were projecting at me from the
        audience. Engulfing the feelings of this successful achievement was the
        appreciation I had towards my mentors who guided me to this achievement;
        some of whom had even gone beyond their university life but still showed
        up to support me and all my fellow Gaveliers.
      </p>

      <p>
        Unfortunately, till then I did not have a long-sighted personality that
        focused on developing leadership qualities, rather I was only improving
        my public speaking skills through the Gavel Club. On that day, I
        promised myself to become a better team player and that was the vibrant
        rainbow that coloured the path for me to become a Toastmaster. Currently
        working as the Assistant Division Director of Toastmaster District 82 -
        Division F, I am very proud to say that I have taken what I learnt from
        Gavel, through to Toastmasters, not only in becoming a sound
        Toastmaster, but perhaps in nurturing myself as an encouraging mentor as
        well.
      </p>

      <p>
        I believe that regardless of where you stand, if you are passionate
        about something, it is important to expose and challenge yourself to
        grow as an individual. Speech Olympiad taught me that compering and
        delivering a speech are not the same thing, especially when it comes to
        a contest where the delivery is done under a lot of pressure. Some core
        lessons I learnt were that commitment, along with self-evaluation,
        learning from others and being humble, goes a long way. Reflecting on my
        voyage of public speaking, the moral is to remind oneself to never shy
        away from opportunities. It is not necessarily about winning or losing,
        but the experience and exposure you gain by pushing your limits to
        become better at what you do and the way you define yourself.
      </p>

      <p class="box">
        Being a champion does not only mean that you will be celebrating, but
        rather exploring the deep end and investing in yourself more. Grow up to
        every dawn of sunrise and bloom wherever life plants you, for enjoying
        what you do matters the most. I cherish the journey, not the end result.
      </p>

      <ArticleInterview
        author-name="Chemini Mallikarachchi"
        interviewee-name="Mohamed Yasir"
        :intervieweeImg="PathOfChampion_portrait"
      />
    </AppArticle>
  </main>
</template>

<style scoped>
li {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 10px;
    border : none;
}

p {
    @apply font-extralight mt-2 mb-2
}
</style>