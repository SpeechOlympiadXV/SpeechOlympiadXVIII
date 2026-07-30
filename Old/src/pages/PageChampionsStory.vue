<script>
import TechnicalTips from "../components/TechnicalTips.vue";
import Yasir from "../ChampStory/Yasir.vue"
import Niruthika from "../ChampStory/Niru.vue"
import NiruthikaPortrait from "../assets/images/Niru_profile_img.png"
import YasirPortrait from "../assets/images/PathOfChampion_portrait.jpg"
export default {
    data() {

        return {
            key: "0",
            technicalTips: [
                {
                    key: "1",
                    imageSrc: YasirPortrait,


                    title: "Walk the Path <br class='hidden md:block' /> of a <br class='hidden md:block' /> Champion",

                    subtitle: "The story of Mohamed Yasir, champion of Speech Olympiad VIII",
                    backgroundColorClass: "bg-yellow-300",
                    // body: "Speech Olympiad is more than a mere speaking contest, it is a culmination of people, experiences and exposure. I cherish to this date, every moment of the competition which was a gateway to self-reflection that enhanced my capabilities in the corporate world and beyond.",
                },
                {
                    key: "2",
                    imageSrc: NiruthikaPortrait,
                    title: 'The Transformative Journey<br/> of a Champion',
                    subtitle: "The story of Niruththika Sritharan, Champion of Speech Olympiad  XIV",
                    backgroundColorClass: "bg-orange-400",
                    body: "My Speech Olympiad experience has enabled me to become the storyteller I am today. I work in advertising where I get to present new ideas and unique concepts to both my team and clients on a daily basis. I developed my presenting skills thanks to the support and knowledge I got from Speech Olympiad and the Gavel Club of University of Moratuwa.",
                }
            ]
        }
    },
    methods: {
        handleClick(key) {
            this.key = key;
        },
        closePost() {
            this.key = "0";
        }
    },
    components: {
        TechnicalTips,
        Yasir,
        Niruthika
    },

}
</script>
<template>
    <div :class="['p-8 m-8 rounded-lg transition-all', key === '0' ? 'bg-gradient-to-br from-[#282828] to-[#EDC00111] backdrop-blur-sm w-[90%] ml-[5%]  mr-auto' : 'w-full']">
        <!-- <div class="col-12 mb-2">
            <h1 class="featurette-heading mt-0 mb-4">Champion's Story</h1>
        </div> -->
        <div class="text-3xl lg:text-4xl font-semibold tracking-[-2px] leading-2 text-white mb-4">
            Champion's Story
        </div>

        <!-- Three columns of cards  -->
        <div class="w-full" v-if="key == '0'">
            <transition-group name="list" tag="div" class="row">
                <div class="w-full md:w-1/2 xl:w-1/3 d-flex justify-content-center" v-for="technicalTip in technicalTips"
                    :key="'testimonial' + technicalTip.key" @click="handleClick(technicalTip.key)">
                    <TechnicalTips :title="technicalTip.title" :imageSrc="technicalTip.imageSrc" :body="technicalTip.body"
                        :subtitle="technicalTip.subtitle" :backgroundColorClass="technicalTip.backgroundColorClass" />
                </div>
                <!-- /.col-lg-4 -->
            </transition-group>
        </div>

    </div>

    <div v-if="key == '1'">
        <button @click="closePost"
            class="bg-amber-800 m-4 text-white p-4 w-36 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>


        </button>
        <Yasir />
        <button @click="closePost"
            class="bg-amber-800 m-4 text-white p-4 w-36 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>


        </button>
    </div>


    <div v-if="key == '2'">
        <button @click="closePost"
            class="bg-amber-800 m-4 text-white p-4 w-36 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>


        </button>
        <niruthika />
        <button @click="closePost"
            class="bg-amber-800 m-4 text-white p-4 w-36 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M9.293 5.293a1 1 0 011.414 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 010 1.414z"
                    clip-rule="evenodd" />
            </svg>


        </button>
    </div>
</template>

<style >
.custom-background2 {
    background: linear-gradient(to bottom, rgba(255, 240, 200, 0.8), rgba(255, 240, 200, 0.2), rgba(255, 140, 0, 0.2), rgba(255, 99, 71, 0.8));
    /* Dark Orange Color Added */
    /* Customize the background color or gradient for the second tile */
}

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