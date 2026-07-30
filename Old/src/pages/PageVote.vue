<template>
    <div v-if="current_data.length > 0" class="px-8 py-10 w-[90%] sm:w-[80%] md:w-[60%] h-auto mx-auto my-10 bg-gradient-to-br rounded-xl from-[#282828] to-[#EDC00111]">
        <div class="w-[100%] max-w-[400px] mx-auto h-auto rounded-md overflow-hidden">
            <img :src="current_data[0].image" class="w-full h-auto object-contain rounded-md">
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
            <a :href="current_data[0].igLink" class="w-full h-10 flex items-center justify-center hover:shadow-md hover:shadow-[#edc00155] hover:text-gray-100 bg-gray-700 bg-gradient-to-br transition-all duration-500 from-[#EDC001aa] via-[#EDC001] to-[#EDC001aa] rounded-lg">
                <font-awesome-icon :icon="faInstagram" class="pl-4 sm:pl-0 sm:mr-2 text-black"/>
                <p class="text-center font-bold text-black text-xs sm:text-sm md:text-md">Vote on Instagram</p>
            </a>
            <a :href="current_data[0].fbLink" class="w-full h-10 flex items-center justify-center hover:shadow-md hover:shadow-[#edc00155] hover:text-gray-100 bg-gray-700 bg-gradient-to-br transition-all duration-500 from-[#EDC001aa] via-[#EDC001] to-[#EDC001aa] rounded-lg">
                <font-awesome-icon :icon="faFacebook" class="pl-4 sm:pl-0 sm:mr-2 text-black"/>
                <p class="text-center font-bold text-black text-xs sm:text-sm md:text-md">Vote on Facebook</p>
            </a>
        </div>
        <!-- <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-8">
            After an intense competition, this remarkable speaker has earned their spot in the grand Finale! With every word {{  current_data[0].name }} transforms the ordinary into the extraordinary. ✨
        </div>
        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-thin mt-4">
            Vote {{ current_data[0].gender ? "her" : "him" }} as the Most Popular Speaker and help crown the audience favorite! 🏆
        </div> -->
        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg mt-4 font-normal">
            Place your like now through Facebook and Instagram before 19th of February! 🗳✨
        </div>
        <ul class="list-disc pl-6 mt-2 space-y-1" style="list-style-type: circle;">
            <li class="text-gray-300 p-1 font-semibold">1 like = 1 point</li>
            <li class="text-gray-300 p-1 font-semibold">1 share = 2 points</li>
        </ul>
        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-normal mt-4">
            (Only the likes and shares of the original post will be considered.)
        </div>
        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-bold mt-4">
            Vote for them on the Grand Finale!
        </div>
        <div class="text-gray-300 leading-6 text-left text-md sm:text-lg font-bold">
            A physical vote registered at the Grand Finale = 5 points
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import thulasi from "../assets/images/voting/thulasi.jpg"
import ami from "../assets/images/voting/ami.jpg"
import neela from "../assets/images/voting/neela.jpg"
import aloka from "../assets/images/voting/aloka.jpg"
import afra from "../assets/images/voting/afra.jpg"

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
      faFacebook,
      faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// TODO: Check svg core bundle size
library.add(faInstagram, faFacebook);

const current_data = ref({})

const data = [
    {
        name: "Thulasithan Gnanenthiram",
        hash : "#thulasithan",
        gender : 0,
        image: thulasi,
        igLink: "https://www.instagram.com/p/DGBI7SbSJAO/?igsh=MWlhd3F1djNybzlscw==",
        fbLink: "https://www.facebook.com/share/p/15qL8sRhvS/?mibextid=oFDknk"
    },
    {
        name : "Amirthavarshani Ananthan",
        hash: "#amirthavarshani",
        gender : 1,
        image: ami,
        igLink: "https://www.instagram.com/p/DGBIl6rSC_y/?igsh=ZXh0Z3dib2JpbTY0",
        fbLink: "https://www.facebook.com/share/p/1J8omuhXbd/?mibextid=oFDknk"
    },
    {
        name: "Neelayadhakshi Priyadhakshan",
        hash : "#neelayadhakshi",
        gender : 1,
        image: neela,
        igLink: "https://www.instagram.com/p/DGBI1t2SKIh/?igsh=MTkxMXZiZWhwbTh0Mg==",
        fbLink: "https://www.facebook.com/share/p/1A4LswJeeu/?mibextid=oFDknk"
    },
    {
        name: "Aloka Fernando",
        hash : "#aloka",
        gender : 0,
        image: aloka,
        igLink: "https://www.instagram.com/p/DGBIvUGSMXk/?igsh=dzF6ZjI5cWEyMHJp",
        fbLink: "https://www.facebook.com/share/p/16Azar2UYx/?mibextid=oFDknk"
    },
    {
        name : "Afrah Rumie",
        hash : "#afrah",
        gender : 1,
        image : afra,
        igLink : "https://www.instagram.com/p/DGBIEhSysGC/?igsh=MXR4YmRia2dlYmpzeA==",
        fbLink : "https://www.facebook.com/share/p/1CqidZF34L/?mibextid=oFDknk"
    }
]

onMounted(() => {
    const hash = window.location.hash;
    current_data.value = data.filter(x => x.hash === hash);

    window.onhashchange = () => {
        const newHash = window.location.hash;
        current_data.value = data.filter(x => x.hash === newHash);
    };
});

</script>

<style scoped>
    ul {
        list-style-type: disc;
    }
    li {
        border-style: none;
    }
</style>