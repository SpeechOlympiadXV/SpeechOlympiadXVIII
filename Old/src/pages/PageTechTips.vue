<script>
import TechnicalTips_portrait from "../assets/images/TechnicalTips_portrait.jpeg";
import TechnicalTips from "../components/TechnicalTips.vue";
import Yasir from "../TechTips/Yasir_techtip.vue";
import Samadhi from "../TechTips/Samadhi.vue";
import Madushika from "../TechTips/Madushika.vue";
import Kasun from "../TechTips/Kasun.vue";
import MadushikaPortrait from "../assets/images/Madushika_portrait.jpg";
import yasirPortrait from "../assets/images/PathOfChampion_portrait.jpg";
import KasunPortrait from "../assets/images/Kasunayya.jpg"

export default {
  data() {
    return {
      key: "0",
      technicalTips: [
        {
          key: "1",
          imageSrc: TechnicalTips_portrait,
          title: "A guide <br/>  to becoming a  <br/> better speaker",
          subtitle:
            "Tips from Dr.Samadhi Poornima, champion of Speech Olympiad IX",
          backgroundColorClass: "bg-amber-900", // Use a custom CSS class
          backgroundColorHash: "#FFF2CC", // Use a custom background color
          body: "Speech Olympiad is more than a mere speaking contest, it is a culmination of people, experiences and exposure. I cherish to this date, every moment of the competition which was a gateway to self-reflection that enhanced my capabilities in the corporate world and beyond.",
        },
        {
          key: "2",
          imageSrc: MadushikaPortrait,
          title: "Embarking <br/> On <br/> Eloquence <br/>  ",
          subtitle:
            "Tips from Toastmaster Madushika Munasinghe, Semi Finalist of Speech Olympiad XIII, Former Vice President Membership",
          backgroundColorHash: "#FFD966", // Use a custom background color
          body: "My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.",
        },
        {
          key: "3",
          imageSrc: yasirPortrait,
          title: "Crafting <br/>  Compelling <br/>  Speeches",
          subtitle:
            "Tips on how to craft and structure your speech from DTM Mohamed Yasir, Champion of Speech Olympiad VIII",
          backgroundColorClass: "bg-amber-900",
          backgroundColorHash: "#F4B183", // Use a custom background color
          body: "My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.",
        },
        // {
        //   key: "4",
        //   imageSrc: KasunPortrait,
        //   title: "The Art  <br/> Of <br/>  Winning",
        //   subtitle:
        //     "Tips from Kasun Ranasinghe, Champion of Speech Olympiad X",
        //   backgroundColorClass: "bg-amber-900",
        //   backgroundColorHash: "#DFA67B", // Use a custom background color
        //   body: "My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.",
        // },
      ],
    };
  },
  methods: {
    handleClick(key) {
      this.key = key;
    },
    closePost() {
      this.key = "0";
    },
  },
  components: {
    TechnicalTips,
    Samadhi,
    Madushika,
    Yasir,
    Kasun
  },
};
</script>
<template>
<div :class="['px-8 py-8 m-9 rounded-lg transition-all', key === '0' ? 'bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm w-[90%] ml-[5%] mr-auto' : 'w-full']">
    <div class="text-3xl mb-9 lg:text-4xl font-semibold tracking-[-2px] leading-2 text-white">
      Technical Tips
    </div>

    <!-- Three columns of cards  -->
    <div class="w-full" v-if="key == '0'">
      <transition-group name="list" tag="div" class="row">
        <div class="w-full md:w-1/2 xl:w-1/3 d-flex justify-content-center" v-for="technicalTip in technicalTips"
          :key="'testimonial' + technicalTip.key" @click="handleClick(technicalTip.key)">
          <TechnicalTips :title="technicalTip.title" :imageSrc="technicalTip.imageSrc" :body="technicalTip.body"
            :subtitle="technicalTip.subtitle" :backgroundColorClass="technicalTip.backgroundColorClass"
            :backgroundColorHash="technicalTip.backgroundColorHash" />
        </div>
        <!-- /.col-lg-4 -->
      </transition-group>
    </div>
  </div>
  <!-- Samadhi -->
  <div v-if="key == '1'">
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <Samadhi />
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <!-- madushika -->
  <div v-if="key == '2'">
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <Madushika />
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <div v-if="key == '3'">
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <yasir />
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div v-if="key == '4'">
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
    <Kasun />
    <button @click="closePost"
      class="bg-amber-800 m-4 text-white p-4 w-20 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<style >
.featurette-heading {
  font-size: 30px;
}

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
    font-weight: bold;
  }
}
</style>